import React, { useState, createContext } from "react";

export const CountContext = createContext();

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  return (
    <CountContext.Provider value={{ count, setCount, firstName, setFirstName }}>
      {children}
    </CountContext.Provider>
  );
}
