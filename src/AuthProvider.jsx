import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, displayName, photoURL) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const updatedUser = {
                ...userCredential.user,
                displayName: displayName,
                photoURL: photoURL
            };
            setUser(updatedUser);
            setLoading(false);
            return userCredential;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            setLoading(false);
            return userCredential;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error signing out: ", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
