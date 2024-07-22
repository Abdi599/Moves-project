// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// Import other Firebase services if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0jV4ubpqc7d6eUORWM35RgCfhWNPuFdc",
  authDomain: "abdiladif-1c6b1.firebaseapp.com",
  projectId: "abdiladif-1c6b1",
  storageBucket: "abdiladif-1c6b1.appspot.com",
  messagingSenderId: "203335352787",
  appId: "1:203335352787:web:dea6e2ab9afc25f5a7ef26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the necessary functions
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
