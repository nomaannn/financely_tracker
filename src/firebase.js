import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVoBo7aTJvq9AvdZyA1rpOLij-s5FmIMg",
    authDomain: "financely-c7281.firebaseapp.com",
    projectId: "financely-c7281",
    storageBucket: "financely-c7281.appspot.com",
    messagingSenderId: "130586283562",
    appId: "1:130586283562:web:1d4e3176ead30759cbbd53",
    measurementId: "G-4FHDRHM3R5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
