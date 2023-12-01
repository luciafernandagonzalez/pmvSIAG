// import firebase from 'firebase/app';
// import 'firebase/firestore'; // Importa los servicios que vayas a utilizar, por ejemplo, Firestore
// import { firestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { collection, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
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
// const analytics = getAnalytics(app);
 const db = getFirestore(app)

export { db };
// export const db = firebase.firestore(); // Inicializa Firestore u otro servicio que necesites
// Puedes exportar otros servicios de Firebase de la misma manera si los necesitas

