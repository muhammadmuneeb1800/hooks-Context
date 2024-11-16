import React from "react";
import { Route, Routes } from "react-router-dom";
import Carts from "./Carts";
import Services from "./Services";
import Products from "./Products";
import Users from "./Users";

export default function Dashboard() {
  return (
    <>
      <Routes>
        <Route path="carts" element={<Carts />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
}
