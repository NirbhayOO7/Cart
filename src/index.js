import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC589SLSESQNNDdqL8ZCYtC8_u0EmcVB3U",
  authDomain: "cart-3aa69.firebaseapp.com",
  projectId: "cart-3aa69",
  storageBucket: "cart-3aa69.appspot.com",
  messagingSenderId: "638102757173",
  appId: "1:638102757173:web:a0475397d03c388945f67c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
