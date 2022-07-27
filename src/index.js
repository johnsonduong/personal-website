import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn8JJTb7kyRL__Z13nQEUAvXmBktZeoGY",
  authDomain: "personalwebsite-ba372.firebaseapp.com",
  projectId: "personalwebsite-ba372",
  storageBucket: "personalwebsite-ba372.appspot.com",
  messagingSenderId: "631995843512",
  appId: "1:631995843512:web:f36a91a270f5d2ba68854d",
  measurementId: "G-Y79JG0YL6M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "contactMessages");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

export { colRef, addDoc };
