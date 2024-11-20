// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-designer-c1213.firebaseapp.com",
  projectId: "ai-room-designer-c1213",
  storageBucket: "ai-room-designer-c1213.firebasestorage.app",
  messagingSenderId: "151815868551",
  appId: "1:151815868551:web:817aea61acdae3b451e822",
  measurementId: "G-J3R8DZCGV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);