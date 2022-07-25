import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkillsCarousel from "../components/SkillsCarousel";
import config from "../config.json";

const About = () => {
  const biography = config.about.map((bulletPoint) => {
    return (
      <Typography variant="h5" color="initial">
        {bulletPoint}
      </Typography>
    );
  });

  return (
    <div className="About">
      <Container maxWidth="lg" sx={{ border: "none", flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
          {"About"}
        </Typography>
        <Box sx={{ display: "flex", border: "none", mb: 5 }}>
          <Box sx={{ mt: 10 }}>{biography}</Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", width: "20%", ml: 15 }}>
            <img src={require("../images/profile1.png")} alt="Me!" style={{ width: "18em" }} />
          </Box>
        </Box>

        <Box sx={{ border: "none" }}>
          <Typography variant="h4" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 5 }}>
            {"My Tech Stack"}
          </Typography>
          <SkillsCarousel />
        </Box>
      </Container>
    </div>
  );
};

export default About;
