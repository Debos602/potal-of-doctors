// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt61zHZeg96UrtSBF9js1Jw-VMawvyO0Q",
  authDomain: "portal-of-doctors-9a6c7.firebaseapp.com",
  projectId: "portal-of-doctors-9a6c7",
  storageBucket: "portal-of-doctors-9a6c7.firebasestorage.app",
  messagingSenderId: "225655538228",
  appId: "1:225655538228:web:a380f337c7770e32b44061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app