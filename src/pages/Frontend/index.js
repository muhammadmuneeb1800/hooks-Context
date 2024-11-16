import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";

import Footer from "../../components/Footer";

import Hook from "./Hook";

export default function Frontend() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/hook/*" element={<Hook />} />
      </Routes>
      <Footer/>
    </>
  );
}
