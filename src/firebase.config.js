// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVnZwMKr8AjShUaB5JLCU7xTe_fbbkrzs",
  authDomain: "game-hive-auth.firebaseapp.com",
  projectId: "game-hive-auth",
  storageBucket: "game-hive-auth.firebasestorage.app",
  messagingSenderId: "1040532246716",
  appId: "1:1040532246716:web:efa339c9b3c4056399c0b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;