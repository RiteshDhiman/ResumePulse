import { createContext, useContext } from "react";
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyB2Y7L1_jd7_6QX68b6_wYDRvkJf5qciGk",
    authDomain: "resumepulse.firebaseapp.com",
    projectId: "resumepulse",
    storageBucket: "resumepulse.appspot.com",
    messagingSenderId: "175115388644",
    appId: "1:175115388644:web:f071c21cfed1b743770ef1",
    measurementId: "G-G237TJXCLW"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider();

export const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = ({children}) => {

    const signupEmailandPassword = (email, password) =>{
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const googleSignUp = () => {
        signInWithPopup(firebaseAuth, googleProvider)
    }

    const signinemailPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    return (
        <FirebaseContext.Provider value={{signupEmailandPassword, googleSignUp, signinemailPassword}}>
            {children}
        </FirebaseContext.Provider>
    )
}