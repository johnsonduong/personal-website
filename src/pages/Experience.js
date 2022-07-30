import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Card from "../components/Card";
import config from "../config.json";

import firstImage from "../images/ell-logo.png";
import secondImage from "../images/toyota-logo.png";
import thirdImage from "../images/uwaterloo-logo.png";

const imageArray = [firstImage, secondImage, thirdImage];

const Experience = () => {
  const experiences = config.experience.map((experience, index) => {
    return <Card title={experience.company} heading={experience.jobTitle} meta={experience.meta} info={experience.info} backgroundColor={experience.backgroundColor} imagePath={imageArray[index]} />;
  });

  return (
    <div className="Experience">
      <Container maxWidth="lg" sx={{ border: "none", flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3, fontSize: { xs: 40, sm: 40, md: 50, lg: 60, xl: 60 } }}>
          {"Experience"}
        </Typography>
      </Container>
      {experiences}
    </div>
  );
};

export default Experience;
