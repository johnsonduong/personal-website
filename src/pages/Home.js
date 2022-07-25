import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="Home">
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", border: "none", flexGrow: 1, height: "100%" }}>
        <Box sx={{ border: "none", mb: 25 }}>
          <Box>
            <Typography variant="h1" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 2, px: 20 }}>
              {"Johnson Duong"}
            </Typography>
            <Typography variant="h4" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 0, px: 20 }}>
              <Typed strings={["Software Developer", "Computer Engineering^750 @ UWaterloo", "Fitness Freak", "Music Lover", "Avid Bike Rider", "Tech Enthusiast"]} typeSpeed={40} backSpeed={50} backDelay={1000} loop />
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
