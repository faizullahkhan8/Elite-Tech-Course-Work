/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
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

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Firebase Auth user
    const [userInfo, setUserInfo] = useState(null); // Firestore profile
    const [loading, setLoading] = useState(true);

    // =====================
    // 🔑 AUTH FUNCTIONS
    // =====================
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

    // =====================
    // 👤 USER FUNCTIONS
    // =====================
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

    // =====================
    // 📝 POSTS
    // =====================
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

    // =====================
    // 💬 COMMENTS
    // =====================
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

    // =====================
    // 👍 LIKES
    // =====================
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

    // =====================
    // 🔄 GLOBAL AUTH STATE
    // =====================
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
    }, []);

    return (
        <FirebaseContext.Provider
            value={{
                signupUserWithEmailAndPassword,
                loginUserWithEmailAndPassword,
                loginWithGoogle,
                logoutUser,
                createUser,
                getUserInfo,
                createPost,
                fetchPosts,
                fetchPostById,
                addComment,
                getPostComments,
                addLike,
                removeLike,
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
