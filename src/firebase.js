// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB2_J6MO6nIn1uKBB1ERxTcZOVxYxA_CYA",
  authDomain: "portfolio-rigan.firebaseapp.com",
  projectId: "portfolio-rigan",
  storageBucket: "portfolio-rigan.appspot.com",
  messagingSenderId: "108862510316",
  appId: "1:108862510316:web:0e5238980e2fc31acd81c9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
