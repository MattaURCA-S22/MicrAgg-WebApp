import React, { useContext, useState, useEffect } from 'react';
import { auth } from './firebase';

const AuthContext = React.createContext();

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