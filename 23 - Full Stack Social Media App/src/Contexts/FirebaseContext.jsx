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
} from "firebase/firestore";
import { Navigate } from "react-router-dom";

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
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const navigate = useNavigate();

    // Signup Function
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    // Login Function
    const loginUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    const loginWithGoogle = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            const result = await signInWithPopup(firebaseAuth, googleProvider);

            setUser(result.user);
            return <Navigate to="/" />;
        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    // Logout Function
    const logoutUser = () => {
        return signOut(firebaseAuth);
    };

    const createUser = async (data) => {
        try {
            const createdUser = await setDoc(doc(db, "users", user.uid), data);
            return createdUser;
        } catch (error) {
            console.log("create user :", error.message);
        }
    };

    const getUserInfo = async () => {
        try {
            const userRef = doc(db, "users", user.uid);
            const docSnapshot = await getDoc(userRef);

            if (docSnapshot.exists()) {
                return docSnapshot.data();
            } else {
                return "not found";
            }
        } catch (error) {
            console.log("get user :", error.message);
        }
    };

    const createPost = async ({ text, imageUrl }) => {
        try {
            if (!user) throw new Error("User not logged in");

            // reference to the user document
            const userRef = doc(db, "users", user.uid);

            const postData = {
                creatorRef: userRef,
                text: text || "",
                imageUrl: imageUrl || "",
                likes: [],
                comments: [],
                createdAt: serverTimestamp(),
            };

            const docRef = await addDoc(collection(db, "posts"), postData);
            return docRef.id;
        } catch (error) {
            console.error("Error creating post: ", error);
            throw error;
        }
    };

    // 📥 Fetch posts with creator info populated
    const fetchPosts = async () => {
        const postsSnap = await getDocs(collection(db, "posts"));
        const posts = [];

        for (let postDoc of postsSnap.docs) {
            const postData = postDoc.data();

            // fetch creator info
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

    // Set global state for user
    useEffect(() => {
        const unsub = onAuthStateChanged(firebaseAuth, (authUser) => {
            setLoading(true);
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsub();
    }, [user]);

    return (
        <FirebaseContext.Provider
            value={{
                signupUserWithEmailAndPassword,
                loginUserWithEmailAndPassword,
                loginWithGoogle,
                createPost,
                fetchPosts,
                logoutUser,
                getUserInfo,
                firebaseAuth,
                createUser,
                user,
                loading,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
