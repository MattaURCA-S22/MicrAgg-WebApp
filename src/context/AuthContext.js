import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, updateDoc, doc, setDoc, DocumentSnapshot, getDoc, DocumentReference } from "firebase/firestore";
import { useResponse } from './ResponseContext';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [currentDocRef, setDocRef] = useState();

    async function checkForUserDoc() {
        const user = await signInAnon();
        console.log(user.user.uid)
        if(user != null) { 
            console.log("adf")
            const docRef = doc(db, "User-answers", user.user.uid);
            const docSnap = await getDoc(docRef);
            console.log(docSnap);
            if(docSnap.exists()) {
                console.log("Valid document found, set document");
                console.log(docRef);
                setDocRef(docRef);
                return docSnap.data();
            } else {
                console.log("No valid document found, send to consent page");
                return null;
            }
        }
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signInAnon() {
        return auth.signInAnonymously();
    }

    function initializeDoc() {
        const docRef = doc(db, "User-answers", currentUser.uid);
        console.log(docRef);
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
        addUserData,
        checkForUserDoc
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}