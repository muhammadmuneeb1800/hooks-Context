import React from "react";
import { Route, Routes } from "react-router-dom";

import Frontend from "./Frontend";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Header from "../components/Header"

export default function Index() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route
          path="*"
          element={<h1 className="text-center">404 Page Not Found</h1>}
        />
      </Routes>
    </>
  );
}
