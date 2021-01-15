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


!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, payload)=>{
  if(!userAuth) return ;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...payload
      })
    } catch (error) {
      console.log('Error creating user: ', error.message);
    }
  }

  console.log(snapShot);
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
