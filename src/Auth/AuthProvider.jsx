import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Utils/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUserEmailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User available: ", currentUser)
                setUser(currentUser)
                setLoading(false)
            } else {
                console.log("User not available")
                setUser(null)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])
    console.log(user);
    const authInfo = {
        user,
        loading,
        signInUser,
        signOutUser,
        signInWithGoogle,
        signInWithGithub,
        createUserEmailAndPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;