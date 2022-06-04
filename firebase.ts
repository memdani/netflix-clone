// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7U94NnXpuiB3KuQby3LHAM9k5RBQe28",
  authDomain: "netflix-clone-27cf4.firebaseapp.com",
  projectId: "netflix-clone-27cf4",
  storageBucket: "netflix-clone-27cf4.appspot.com",
  messagingSenderId: "303634816597",
  appId: "1:303634816597:web:669cf594dd6ebc5ab27edc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore ()
const auth = getAuth()

export default app
export { auth, db }