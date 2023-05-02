// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Sz1BNzoLNF-sTvcoTv7tHVbrXiz_xs4",
  authDomain: "practice-firebase-3c68c.firebaseapp.com",
  projectId: "practice-firebase-3c68c",
  storageBucket: "practice-firebase-3c68c.appspot.com",
  messagingSenderId: "282594526156",
  appId: "1:282594526156:web:036cc38e71fb37533a9369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);