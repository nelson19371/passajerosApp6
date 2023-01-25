// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIq_kEW_QugUNOpgQYaMzwOZRAEUUoYhs",
  authDomain: "pasajeros-62872.firebaseapp.com",
  projectId: "pasajeros-62872",
  storageBucket: "pasajeros-62872.appspot.com",
  messagingSenderId: "1060444444730",
  appId: "1:1060444444730:web:bf8f295dcf32c29679bd03",
  measurementId: "G-TE3HZ6481J"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp)
export const FirebaseDB = getFirestore(Firebaseapp)