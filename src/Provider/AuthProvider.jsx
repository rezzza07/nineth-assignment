import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(loading,user)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const logOut = () => {
        return signOut(auth);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    // const googleSignIn = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, googleProvider);
    // };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup (auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        googleSignIn,
    };
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};



export default AuthProvider;