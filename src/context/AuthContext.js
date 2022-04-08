import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, updateDoc, doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [currentDocRef, setDocRef] = useState();

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signInAnon() {
        return auth.signInAnonymously();
    }

    function initializeDoc() {
        const docRef = doc(db, "User-answers", currentUser.uid);
        setDocRef(docRef);
    }

    function addUserData(newAnswers) {
        return setDoc(currentDocRef, newAnswers);
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        
        return unsub;
    }, []);

    const value = {
        currentUser,
        currentDocRef,
        login,
        signInAnon,
        initializeDoc,
        addUserData
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}