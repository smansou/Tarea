import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, Doc, collection } from 'firebase/firestore';
import { React, useContext, useState, useEffect, createContext } from 'react';
import { auth, storageRef } from '../../firebase/firebase';


const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext);
    
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logout () {
        return auth.signOut();
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])
   
    
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (

        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
