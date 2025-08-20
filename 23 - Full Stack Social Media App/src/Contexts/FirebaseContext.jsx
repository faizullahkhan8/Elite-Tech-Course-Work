/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { ref, onValue, push, getDatabase, set } from "firebase/database";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import {
    getFirestore,
    setDoc,
    doc,
    getDoc,
    getDocs,
    collection,
    addDoc,
    serverTimestamp,
    updateDoc,
    arrayUnion,
    arrayRemove,
    where,
    query,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmnf3G26M9zre0WV3oACLImZ4buVPb4G8",
    authDomain: "lets-connekt.firebaseapp.com",
    projectId: "lets-connekt",
    storageBucket: "lets-connekt.appspot.com",
    messagingSenderId: "292613425893",
    appId: "1:292613425893:web:9f7e0ee1d9bfc98ac3620c",
    databaseURL: "https://lets-connekt-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Firebase Auth user
    const [userInfo, setUserInfo] = useState(null); // Firestore profile
    const [loading, setLoading] = useState(true);
    const [refreshUser, setRefreshUser] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const loginUserWithEmailAndPassword = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const loginWithGoogle = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            const result = await signInWithPopup(firebaseAuth, googleProvider);
            setUser(result.user);
        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    const logoutUser = () => signOut(firebaseAuth);

    const createUser = async (data) => {
        try {
            await setDoc(doc(db, "users", user.uid), data);
        } catch (error) {
            console.log("create user error:", error.message);
        }
    };

    const getUserInfo = async (uid) => {
        try {
            const userRef = doc(db, "users", uid);
            const docSnapshot = await getDoc(userRef);
            if (docSnapshot.exists()) {
                return { id: docSnapshot.id, ...docSnapshot.data() };
            }
            return null;
        } catch (error) {
            console.log("get user error:", error.message);
            return null;
        }
    };

    const allUsers = async () => {
        try {
            const usersCollection = collection(db, "users");
            const usersSnapshot = await getDocs(usersCollection);
            const usersList = usersSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return usersList;
        } catch (error) {
            console.log("get all users error:", error.message);
            return [];
        }
    };

    const addFriend = async (friendId) => {
        try {
            if (!user) throw new Error("User not logged in");

            // create friend request notification

            const userRef = doc(db, "users", user.uid);
            const friendRef = doc(db, "users", friendId);

            await updateDoc(userRef, {
                friends: arrayUnion(friendRef),
            });
        } catch (error) {
            console.error("Error adding friend: ", error);
            throw error;
        }
    };

    const removeFriend = async (id) => {
        try {
            if (!user) throw new Error("User not logged in");

            // create friend request notification

            const userRef = doc(db, "users", user.uid);
            const friendRef = doc(db, "users", id);

            await updateDoc(userRef, {
                friends: arrayRemove(friendRef),
            });
        } catch (error) {
            console.error("Error removing friend: ", error);
            throw error;
        }
    };

    const searchUsers = async (searchQuery) => {
        try {
            const usersCollection = collection(db, "users");
            const snapshot = await getDocs(usersCollection);

            // normalize query
            const lowerCaseQuery = searchQuery.toLowerCase();

            const results = snapshot.docs
                .map((doc) => ({ id: doc.id, ...doc.data() }))
                .filter(
                    (user) =>
                        user.name &&
                        user.name.toLowerCase().includes(lowerCaseQuery)
                );

            return results;
        } catch (error) {
            console.error("Error searching users:", error);
            return [];
        }
    };

    const getUserFriends = async (uid) => {
        try {
            const userRef = doc(db, "users", uid);
            const userSnap = await getDoc(userRef);
            if (!userSnap.exists()) throw new Error("User not found");

            const userData = userSnap.data();
            const friends = userData.friends || [];
            const friendDocs = await Promise.all(
                friends.map((friendRef) => getDoc(friendRef))
            );
            return friendDocs.map((doc) => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error getting user friends: ", error);
            return [];
        }
    };

    const createPost = async ({ text, imageUrl }) => {
        try {
            if (!user) throw new Error("User not logged in");

            const userRef = doc(db, "users", user.uid);

            const postData = {
                creatorRef: userRef,
                text: text || "",
                imageUrl: imageUrl || "",
                likes: [],
                createdAt: serverTimestamp(),
            };

            const docRef = await addDoc(collection(db, "posts"), postData);
            return docRef.id;
        } catch (error) {
            console.error("Error creating post: ", error);
            throw error;
        }
    };

    const fetchPosts = async () => {
        const postsSnap = await getDocs(collection(db, "posts"));
        const posts = [];

        for (let postDoc of postsSnap.docs) {
            const postData = postDoc.data();

            let creator = null;
            if (postData.creatorRef) {
                const creatorSnap = await getDoc(postData.creatorRef);
                if (creatorSnap.exists()) {
                    creator = { id: creatorSnap.id, ...creatorSnap.data() };
                }
            }

            posts.push({
                id: postDoc.id,
                ...postData,
                creator,
            });
        }

        return posts;
    };

    const fetchPostById = async (postId) => {
        const postRef = doc(db, "posts", postId);
        const postSnap = await getDoc(postRef);

        if (!postSnap.exists()) throw new Error("Post not found");

        const postData = postSnap.data();
        let creator = null;

        if (postData.creatorRef) {
            const creatorSnap = await getDoc(postData.creatorRef);
            if (creatorSnap.exists()) {
                creator = { id: creatorSnap.id, ...creatorSnap.data() };
            }
        }

        return {
            id: postSnap.id,
            ...postData,
            creator,
        };
    };

    // fetch user posts
    const fetchUserPosts = async (uid) => {
        if (!uid) return [];

        try {
            // build the reference to the user document
            const userRef = doc(db, "users", uid);

            // query posts where creatorRef == that user document
            const q = query(
                collection(db, "posts"),
                where("creatorRef", "==", userRef)
            );

            const snapshot = await getDocs(q);
            let posts = snapshot.docs.map((docSnap) => ({
                id: docSnap.id,
                ...docSnap.data(),
            }));

            // sort by createdAt (newest first)
            posts.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);

            return posts;
        } catch (error) {
            console.error("Error fetching user posts:", error);
            return [];
        }
    };

    const addComment = async (postId, commentText) => {
        try {
            const commentData = {
                text: commentText,
                createdAt: serverTimestamp(),
                userRef: doc(db, "users", user.uid),
            };

            const commentsRef = collection(db, "posts", postId, "comments");
            const docRef = await addDoc(commentsRef, commentData);

            return { id: docRef.id, ...commentData };
        } catch (error) {
            console.error("Error adding comment: ", error);
            throw error;
        }
    };

    const getPostComments = async (postId) => {
        try {
            const commentsRef = collection(db, "posts", postId, "comments");
            const querySnapshot = await getDocs(commentsRef);

            const comments = await Promise.all(
                querySnapshot.docs.map(async (commentDoc) => {
                    const data = commentDoc.data();

                    let userData = null;
                    if (data.userRef) {
                        const userSnap = await getDoc(data.userRef);
                        if (userSnap.exists()) {
                            userData = userSnap.data();
                        }
                    }

                    return {
                        id: commentDoc.id,
                        ...data,
                        user: userData,
                    };
                })
            );

            return comments.sort(
                (a, b) => b.createdAt?.seconds - a.createdAt?.seconds
            );
        } catch (error) {
            console.error("Error fetching comments:", error);
            throw error;
        }
    };

    const addLike = async (postId) => {
        try {
            if (!user) throw new Error("User not logged in");
            const postRef = doc(db, "posts", postId);
            await updateDoc(postRef, { likes: arrayUnion(user.uid) });
        } catch (error) {
            console.error("Error adding like: ", error);
            throw error;
        }
    };

    const removeLike = async (postId) => {
        try {
            if (!user) throw new Error("User not logged in");
            const postRef = doc(db, "posts", postId);
            await updateDoc(postRef, { likes: arrayRemove(user.uid) });
        } catch (error) {
            console.error("Error removing like: ", error);
            throw error;
        }
    };

    useEffect(() => {
        if (!user?.uid) return;

        const notifRef = ref(rtdb, `notifications/${user.uid}`);

        const unsubscribe = onValue(notifRef, async (snapshot) => {
            const data = snapshot.val();
            if (!data) {
                setNotifications([]);
                return;
            }

            // Convert object → array + fetch sender info
            const notifsArray = await Promise.all(
                Object.entries(data).map(async ([id, notif]) => {
                    let sender = null;

                    // fetch sender details from Firestore
                    if (notif.senderId) {
                        try {
                            const senderSnap = await getDoc(
                                doc(db, "users", notif.senderId)
                            );
                            if (senderSnap.exists()) {
                                sender = {
                                    id: senderSnap.id,
                                    ...senderSnap.data(),
                                };
                            }
                        } catch (error) {
                            console.error("Error fetching sender info:", error);
                        }
                    }

                    return {
                        id,
                        ...notif,
                        sender,
                        createdAt: notif.createdAt
                            ? new Date(notif.createdAt)
                            : null,
                    };
                })
            );

            // Sort newest → oldest
            notifsArray.sort((a, b) => {
                if (!a.createdAt || !b.createdAt) return 0;
                return b.createdAt - a.createdAt;
            });

            setNotifications(notifsArray);
        });

        return () => unsubscribe();
    }, [user]);

    // Add notification
    const addNotification = async (receiverId, notification) => {
        try {
            const notificationsRef = ref(rtdb, `notifications/${receiverId}`);
            const newNotificationRef = push(notificationsRef);

            await set(newNotificationRef, {
                ...notification,
                createdAt: serverTimestamp(),
                read: false,
            });
        } catch (error) {
            console.error("Error adding notification:", error);
        }
    };

    useEffect(() => {
        const unsub = onAuthStateChanged(firebaseAuth, async (authUser) => {
            setLoading(true);
            if (authUser) {
                setUser(authUser);

                // fetch Firestore profile
                const info = await getUserInfo(authUser.uid);
                setUserInfo(info);
            } else {
                setUser(null);
                setUserInfo(null);
            }
            setLoading(false);
        });

        return () => unsub();
    }, [setUserInfo, setUser]);

    return (
        <FirebaseContext.Provider
            value={{
                signupUserWithEmailAndPassword,
                loginUserWithEmailAndPassword,
                loginWithGoogle,
                logoutUser,
                refreshUser,
                setRefreshUser,
                createUser,
                getUserInfo,
                allUsers,
                searchUsers,
                addFriend,
                removeFriend,
                getUserFriends,
                createPost,
                fetchPosts,
                fetchPostById,
                fetchUserPosts,
                addComment,
                getPostComments,
                addLike,
                removeLike,
                notifications,
                addNotification,
                firebaseAuth,
                user, // Firebase Auth User
                userInfo, // Firestore Profile
                loading,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
