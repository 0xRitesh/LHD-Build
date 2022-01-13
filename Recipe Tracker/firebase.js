import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkh4qnX2F_C-KkgnQq4nE8yemGbB4tuWU",
  authDomain: "recipe-tracker-mlh.firebaseapp.com",
  projectId: "recipe-tracker-mlh",
  storageBucket: "recipe-tracker-mlh.appspot.com",
  messagingSenderId: "41001416144",
  appId: "1:41001416144:web:de262d97dfbdffdadcf5d5",
  measurementId: "G-X4HZGDMNDD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Intialize Firestore
const firestore = getFirestore(app);

export default firestore;
