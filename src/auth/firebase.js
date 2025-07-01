// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeNrwGulWtqErCs6Lq9FM2Nn-u-I1vmdI",
  authDomain: "bulletin-auth.firebaseapp.com",
  projectId: "bulletin-auth",
  storageBucket: "bulletin-auth.firebasestorage.app",
  messagingSenderId: "481019100676",
  appId: "1:481019100676:web:d1e47e0fef918ef18abf51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
