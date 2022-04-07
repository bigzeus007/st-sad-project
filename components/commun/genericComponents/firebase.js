// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZWDtngY9NeP6NXMk7g2xduDSzig_j-mQ",
  authDomain: "one-touch-work.firebaseapp.com",
  databaseURL: "https://one-touch-work-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "one-touch-work",
  storageBucket: "one-touch-work.appspot.com",
  messagingSenderId: "970391497215",
  appId: "1:970391497215:web:5e734ea23127e340de1fca",
  measurementId: "G-87K7CSJ9PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.initializeApp(firebaseConfig).auth();
export const db = getFirestore(app);
export const storage = getStorage(app);
