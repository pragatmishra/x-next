// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.
  NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-425511.firebaseapp.com",
  projectId: "x-next-425511",
  storageBucket: "x-next-425511.appspot.com",
  messagingSenderId: "677369412414",
  appId: "1:677369412414:web:36e654fa1e6815279f4a6f",
  measurementId: "G-PGCCGCG8GM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);