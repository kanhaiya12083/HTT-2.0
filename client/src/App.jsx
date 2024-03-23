import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import NavBar from "./layout/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
