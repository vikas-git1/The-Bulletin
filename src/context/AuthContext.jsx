import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userDetails) => {
      setUser(userDetails);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
