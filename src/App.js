import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    fontFamily: ["Poppins", "Open Sans", "sans-serif"].join(","),
  },
  palette: {
    // primary: "#353535",
    // secondary: "#284b63",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App show-background">
          <AnimatedCursor innerSize={8} outerSize={25} color="50, 50, 50" outerAlpha={0.3} innerScale={0.7} outerScale={3} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
