import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB_N2IKmoX3BKbEZ_eJ9jgvhnKZlAQ4QzQ",
    authDomain: "react-app-curso-40037.firebaseapp.com",
    databaseURL: "https://react-app-curso-40037.firebaseio.com",
    projectId: "react-app-curso-40037",
    storageBucket: "react-app-curso-40037.appspot.com",
    messagingSenderId: "1044758791766",
    appId: "1:1044758791766:web:a6f9493713594d8b8c1df7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};
