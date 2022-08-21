import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import ProjectCard from "../components/ProjectCard";
import config from "../config.json";

const Projects = () => {
  const projects = config.projects.map((project, index) => {
    return <ProjectCard id={project._id} title={project.title} heading={project.description} skills={project.skills} info={project.info} buttons={project.buttons} links={project.links} images={project.images} />;
  });

  return (
    <div className="Projects">
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3, fontSize: { xs: 40, sm: 40, md: 50, lg: 60, xl: 60 } }}>
          Projects
        </Typography>
      </Container>
      {projects}
    </div>
  );
};

export default Projects;
