import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [firstName, setFirstName] = useState("");
  return (
    <AuthContext.Provider
      value={{ firstName, setFirstName, isAuthenticate, setIsAuthenticate }}
    >
      {children}
    </AuthContext.Provider>
  );
}
