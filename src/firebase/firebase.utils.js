//esta es la lista de configuraciones de los servisos de google firebase

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

//esta es la funcion que nos permite registrar usuarios en la base de datos a traves de 
export const createUserProfileDocument = async(userAuth, additionalData)=>{
    // esta es la linea que hace que la funcion no se dispare si el usuario no esta logeado
    if(!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    //esto lo usamos paraverificar si existe el usuario en la base
 //necesitamos usar el ref y no el snapshot si queremos crear un usuario ya que el snapshot solo representa los datos,
//  se usa el Document.ref para hacer las operaciones crud


// Este codigo se usa para el registro de usuarios
    if(!snapShot.exist){
        const {displayName, email} = userAuth;
        const createAt = new Date(); 
// si no existe se toma el display name el email y la fecha de creacion para colocarlo dentro de la base de datos sacajdo de el userAuth.id
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user: ', error)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;