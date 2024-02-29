// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArhI1IIv4-ezKsDBaFZ5KL-quh9jvCxZU",
  authDomain: "aromaguilar-1935e.firebaseapp.com",
  projectId: "aromaguilar-1935e",
  storageBucket: "aromaguilar-1935e.appspot.com",
  messagingSenderId: "639160431870",
  appId: "1:639160431870:web:2685f5bfd5eaef281ca1af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)