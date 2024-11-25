
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqkftm7GK2-JM6zvEnSzq7IPXnuIAO3NA",
  authDomain: "fir-demo-9c0fb.firebaseapp.com",
  projectId: "fir-demo-9c0fb",
  storageBucket: "fir-demo-9c0fb.firebasestorage.app",
  messagingSenderId: "1047298560522",
  appId: "1:1047298560522:web:c64eeaae91afe374ef05f3",
  measurementId: "G-N56K09YJM9",
  databaseURL:'https://fir-demo-9c0fb-default-rtdb.firebaseio.com'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);