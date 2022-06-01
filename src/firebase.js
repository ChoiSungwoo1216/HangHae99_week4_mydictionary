// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXUZS9vpfXwdKhhFcFTV4equxbHKzbHDs",
  authDomain: "sparta-react-basic-1fae8.firebaseapp.com",
  projectId: "sparta-react-basic-1fae8",
  storageBucket: "sparta-react-basic-1fae8.appspot.com",
  messagingSenderId: "124868106114",
  appId: "1:124868106114:web:1a230fbb908e9d019ba19b",
  measurementId: "G-R20CLG01HT"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
