// import { collection, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
//  import 'firebase/auth';
//  import firebase from 'firebase/app';
//  import 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyDj6qF2qLmcjB8Q9yRG_Ma1IQLWOlaDjwQ",
    authDomain: "pmvpf-f8f43.firebaseapp.com",
    projectId: "pmvpf-f8f43",
    storageBucket: "pmvpf-f8f43.appspot.com",
    messagingSenderId: "573929989433",
    appId: "1:573929989433:web:1ab15550465fd85484f4e8",
    measurementId: "G-FRRRFFL9LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const auth = firebase.auth();
 const db = getFirestore(app)

export { auth, db };