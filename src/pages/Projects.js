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

const Projects = () => {
  const projects = config.projects.map((project, index) => {
    return <Card className="card" title={project.title} heading={project.description} date={project.date} info={project.info} imagePath={imageArray[index]} />;
  });

  return (
    <div className="Projects">
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
          {"Projects"}
        </Typography>
      </Container>
      {projects}
    </div>
  );
};

export default Projects;
