import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey:  process.env.REACT_APP_APIKEY,
    authDomain:  process.env.REACT_APP_AUTHDOMAIN,
    databaseURL:  process.env.REACT_APP_DATABASEURL,
    projectId:  process.env.REACT_APP_PROJECTID,
    storageBucket:  process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSAGINGSENDERID,
    appId:  process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyDEYl07fykzXS8-1NeXD35qpR2p-0Xy_xs",
//     authDomain: "tacostito-c4aa5.firebaseapp.com",
//     databaseURL: "https://tacostito-c4aa5.firebaseio.com",
//     projectId: "tacostito-c4aa5",
//     storageBucket: "tacostito-c4aa5.appspot.com",
//     messagingSenderId: "917382244101",
//     appId: "1:917382244101:web:07cd0754d02bd1e471b96c"
// };


// if (process.env.NODE_ENV === 'test') {
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
//     firebase.initializeApp(firebaseConfig);
// }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};
