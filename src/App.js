import React from "react";
import UploadMsg from "./supabase/insert";
import GetData from "./supabase/select";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
