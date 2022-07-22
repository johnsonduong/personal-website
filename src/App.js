import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
