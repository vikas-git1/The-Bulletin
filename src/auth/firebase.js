// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXBr5pJwAA67pPUDN2loQkZhEfPPd7Kmk",
  authDomain: "the-bulletin-auth.firebaseapp.com",
  projectId: "the-bulletin-auth",
  storageBucket: "the-bulletin-auth.firebasestorage.app",
  messagingSenderId: "141822362339",
  appId: "1:141822362339:web:837545513a27cb17ee3bd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
