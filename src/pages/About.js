import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkillsCarousel from "../components/SkillsCarousel";
import config from "../config.json";

const About = () => {
  const biography = config.about.map((bulletPoint) => {
    return (
      <Typography variant="h5" color="initial" sx={{ fontSize: { xs: 16, sm: 16, md: 20, lg: 22, xl: 22 } }}>
        {bulletPoint}
      </Typography>
    );
  });

  return (
    <div className="About">
      <Container maxWidth="lg" sx={{ border: "none", flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3, fontSize: { xs: 40, sm: 40, md: 50, lg: 60, xl: 60 } }}>
          {"About"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", border: "none", mb: 5 }}>
          <Box>{biography}</Box>
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <img src={require("../images/rocket.png")} className="about-photo" alt="Me!" />
          </Box>
        </Box>

        <Box sx={{ border: "none" }}>
          <Typography variant="h4" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 5, fontSize: { xs: 25, sm: 25, md: 30, lg: 35, xl: 35 } }}>
            {"My Tech Stack"}
          </Typography>
          <SkillsCarousel />
        </Box>
      </Container>
    </div>
  );
};

export default About;
