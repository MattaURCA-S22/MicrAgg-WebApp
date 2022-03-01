import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export const addNewUserData = async (newAnswers) => {
    const docRef = await addDoc(collection(db, "User-answers"), newAnswers);
    console.log("Document written with ID: " + docRef.id);
}

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function login(email, password) {
        console.log(email + " " + password);
        return auth.signInWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        
        return unsub;
    }, []);

    const value = {
        currentUser,
        login
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}