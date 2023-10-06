import React, { useContext, createContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

const AuthContext = createContext()

export default function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    function register(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
          savedShows: []
        })
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
        });
        return () => {
          unsubscribe();
        };
      });

  return (
    <AuthContext.Provider value={{ currentUser, register, logIn, logOut }}>
        {children}
    </AuthContext.Provider>
  )
}

export function UserAuth(){
    return useContext(AuthContext)
}
