import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Typed from "react-typed";
import { makeStyles, useTheme } from "@mui/material";

const Home = () => {
  return (
    <div className="Home">
      <Container maxWidth="lg" md sx={{ display: "flex", justifyContent: "center", alignItems: "center", border: "none", flexGrow: 1, height: "100%" }}>
        <Box sx={{ border: "none", mb: 25 }}>
          <Box>
            <Typography variant={"h1"} component="h1" color="initial" sx={{ fontWeight: "bold", mb: 2, px: 20, fontSize: { xs: 50, sm: 50, md: 60, lg: 80, xl: 90 } }}>
              {"Johnson Duong"}
            </Typography>
            <Typography variant="h4" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 0, px: 20, fontSize: { xs: 20, sm: 20, md: 25, lg: 30, xl: 35 } }}>
              <Typed strings={["Software Developer", "Computer Engineering @ UWaterloo", "Professional Googler", "Gym Rat", "Music Lover", "Finance Nerd"]} typeSpeed={40} backSpeed={50} backDelay={1000} loop />
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
