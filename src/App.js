import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Contact from "./page/Contact"
import About from "./page/About"
import Start from "./page/Start"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 2.25rem)",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
