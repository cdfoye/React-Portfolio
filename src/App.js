import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Particles from "./components/Particles/Particles";
import Download from "./components/Download/Download";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
      <Particles />
    </Router>
  );
}

export default App;
