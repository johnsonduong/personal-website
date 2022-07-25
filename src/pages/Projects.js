import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="Projects">
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
          {"Projects"}
        </Typography>
      </Container>
      <Card title="PixArt" heading="An online drawing application" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam officiis cum doloremque earum quo dicta impedit nobis aperiam illo." backgroundColor="#d7ebff"></Card>
      <Card
        title="Rock Paper Scissors"
        heading="Play against a computer"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam officiis cum doloremque earum quo dicta impedit nobis aperiam illo."
        backgroundColor="transparent"
      ></Card>
      <Card title="Monkey Business" heading="A mock landing page" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam officiis cum doloremque earum quo dicta impedit nobis aperiam illo." backgroundColor="#d7ebff"></Card>
    </div>
  );
};

export default Projects;
