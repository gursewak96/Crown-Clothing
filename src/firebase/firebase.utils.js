import firebase from "firebase"

import "firebase/auth";
import "firebase/firestore";


const config =  {
    apiKey: "AIzaSyAWr3TS4iIbd7QQ187uX1oBs29k2zVKGP0",
    authDomain: "crown-db-f8c5a.firebaseapp.com",
    projectId: "crown-db-f8c5a",
    storageBucket: "crown-db-f8c5a.appspot.com",
    messagingSenderId: "123322106005",
    appId: "1:123322106005:web:6f2087acaa83599a769b9c"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
