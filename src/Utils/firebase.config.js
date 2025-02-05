// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuXK2UK4F-T4cYZAsKQVWYbKxR9K04E4I",
  authDomain: "gadget-heaven-49670.firebaseapp.com",
  databaseURL: "https://gadget-heaven-49670-default-rtdb.firebaseio.com",
  projectId: "gadget-heaven-49670",
  storageBucket: "gadget-heaven-49670.firebasestorage.app",
  messagingSenderId: "493286939315",
  appId: "1:493286939315:web:689e7d1b1c8eaa2856aec6",
  measurementId: "G-K7FKN18977",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
