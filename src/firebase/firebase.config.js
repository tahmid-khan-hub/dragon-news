// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoKY_maeOYPXK2HndANkykaZSIDYDXfyA",
  authDomain: "dragon-news-7b81a.firebaseapp.com",
  projectId: "dragon-news-7b81a",
  storageBucket: "dragon-news-7b81a.firebasestorage.app",
  messagingSenderId: "208062719907",
  appId: "1:208062719907:web:7988af8e0b42b2a331dc16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;