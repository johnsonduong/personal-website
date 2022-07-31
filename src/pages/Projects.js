import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Card from "../components/Card";
import config from "../config.json";

import image1 from "../images/personal-website.png";
import image2 from "../images/pixart.png";
import image3 from "../images/rockpaperscissors.png";
import image4 from "../images/monkey-business.png";
import image5 from "../images/bike-and-jig.jpeg";
import image6 from "../images/lifecycle-machine.jpeg";

const imageArray = [image1, image2, image3, image4, image5, image6];

const Projects = () => {
  const projects = config.projects.map((project, index) => {
    return <Card className="project-card" title={project.title} heading={project.description} meta={project.meta} info={project.info} buttons={project.buttons} links={project.links} imagePath={imageArray[index]} />;
  });

  return (
    <div className="Projects">
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3, fontSize: { xs: 40, sm: 40, md: 50, lg: 60, xl: 60 } }}>
          {"Projects"}
        </Typography>
      </Container>
      {projects}
    </div>
  );
};

export default Projects;
