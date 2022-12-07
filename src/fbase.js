// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnILJf6dLbXaEpP4BBBPNmN9Anf4L0zo0",
  authDomain: "netflix-app-b45a4.firebaseapp.com",
  projectId: "netflix-app-b45a4",
  storageBucket: "netflix-app-b45a4.appspot.com",
  messagingSenderId: "286894883917",
  appId: "1:286894883917:web:c857cc9af5fcc850d78804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const authService = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);