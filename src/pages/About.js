import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import SkillsCarousel from "../components/SkillsCarousel";

const About = () => {
  return (
    <div className="About">
      <Container maxWidth="lg" sx={{ border: "none", flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
          {"About"}
        </Typography>
        <Box sx={{ display: "flex", border: "none", mb: 5 }}>
          <Box sx={{ mt: 10 }}>
            <Typography variant="h6" color="initial">
              👋 Hey! I'm Johnson
            </Typography>
            <Typography variant="h6" color="initial">
              📍 Software Developer Intern @ ELL Technologies
            </Typography>
            <Typography variant="h6" color="initial">
              🏫 Computer Engineering Student @ University of Waterloo
            </Typography>
            <Typography variant="h6" color="initial">
              👀 Currently looking for internships
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", width: "20%", ml: 20 }}>
            <img src={require("../images/profile.png")} alt="Me!" style={{ width: "15em" }} />
          </Box>
        </Box>

        <Box sx={{ border: "none" }}>
          <Typography variant="h4" component="h1" color="initial" sx={{ fontWeight: "bold" }}>
            {"Languages & Tools"}
          </Typography>
          <SkillsCarousel />
        </Box>
      </Container>
    </div>
  );
};

export default About;
