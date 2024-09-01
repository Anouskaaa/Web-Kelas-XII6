// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBF93NRGE3DqItXrlhCJoSe1zLJzHnIg9s",
  authDomain: "website-kelas-c1.firebaseapp.com",
  projectId: "website-kelas-c1",
  storageBucket: "website-kelas-c1.appspot.com",
  messagingSenderId: "879510991544",
  appId: "1:879510991544:web:8b9efe279ccf72343c3a4d",
  measurementId: "G-7QV6TVS1L5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();