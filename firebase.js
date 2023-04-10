// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8f0ab1RK_LgQhqNWo5KO_8__tdJOYf2w",
  authDomain: "nadeeapp-6afb8.firebaseapp.com",
  projectId: "nadeeapp-6afb8",
  storageBucket: "nadeeapp-6afb8.appspot.com",
  messagingSenderId: "300345669840",
  appId: "1:300345669840:web:5b9848689d82f0ddde06d5",
  measurementId: "G-PXZV77NH37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };