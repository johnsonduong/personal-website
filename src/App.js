import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const App = () => {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
    currentPage === "/home" ? document.querySelector(".App").classList.add("show-background") : document.querySelector(".App").classList.remove("show-background");
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AnimatedCursor innerSize={8} outerSize={25} color="50, 50, 50" outerAlpha={0.3} innerScale={0.7} outerScale={3} />
        <Navbar currentPage={currentPage} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
