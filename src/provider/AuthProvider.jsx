import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// Create the AuthContext
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handelRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const handelLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const info = {
    handelRegister,
    handleLogin,
    handelLogout,
    handleGoogleLogin,
    manageProfile,
    user,
    setUser,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
