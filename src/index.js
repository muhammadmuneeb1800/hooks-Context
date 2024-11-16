import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CountContextProvider from "./contexts/CountContext";
import AuthContextProvider from "./contexts/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CountContextProvider>
          <App />
        </CountContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
