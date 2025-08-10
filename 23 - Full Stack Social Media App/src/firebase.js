import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCmnf3G26M9zre0WV3oACLImZ4buVPb4G8",
    authDomain: "lets-connekt.firebaseapp.com",
    projectId: "lets-connekt",
    storageBucket: "lets-connekt.firebasestorage.app",
    messagingSenderId: "292613425893",
    appId: "1:292613425893:web:9f7e0ee1d9bfc98ac3620c",
    databaseURL: "https://lets-connekt-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
