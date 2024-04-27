//firebase.config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "gig-tracker-a1fde.firebaseapp.com",
  projectId: "gig-tracker-a1fde",
  storageBucket: "gig-tracker-a1fde.appspot.com",
  messagingSenderId: "454576102145",
  appId: "1:454576102145:web:7bf9ef1902cbe3d43c1900",
  measurementId: "G-BTXDPNZFKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);