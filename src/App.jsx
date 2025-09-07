import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import { useGSAP } from "@gsap/react"; //hook which help the gsap code smoothly
import gsap from "gsap";
import Navbar from "./components/Navigation/Navbar";
import FullScreen from "./components/Navigation/FullScreen";
const App = () => {
  
  

  return (
    <div className="text-amber-50 overflow-x-hidden">
    
      <Navbar/>
      <FullScreen/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project" element={<Projects />} />

        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
