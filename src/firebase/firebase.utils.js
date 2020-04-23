import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAJOiHl3Dbt8TKaWWT0-rKUkg0YntWuVg4",
    authDomain: "cwrn-db-bd4bc.firebaseapp.com",
    databaseURL: "https://cwrn-db-bd4bc.firebaseio.com",
    projectId: "cwrn-db-bd4bc",
    storageBucket: "cwrn-db-bd4bc.appspot.com",
    messagingSenderId: "1064713798827",
    appId: "1:1064713798827:web:3909230ed57a0b2c5b23ee",
    measurementId: "G-EMKLMC2P7F"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;