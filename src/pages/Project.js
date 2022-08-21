import { React, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Project = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const buttons = props.buttons.map((button, index) => (
    <a href={props.links[index]} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
      <Button
        variant="text"
        color="inherit"
        sx={{
          mr: 1,
          borderRadius: 0,
          fontWeight: "bold",
          "&:hover, &.Mui-focusVisible": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        {button}
        <CallMadeIcon />
      </Button>
    </a>
  ));

  const carouselItems = props.images.map((image, index) => (
    <Carousel.Item className="carousel-item" style={{ backgroundColor: "black" }}>
      <img height={500} className="d-block" src={image} alt={`Slide ${index + 1}`} />
    </Carousel.Item>
  ));

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", border: "none", flexGrow: 1 }}>
      <Typography variant="h3" color="inherit" sx={{ fontWeight: "bold", fontSize: { xs: 40, sm: 40, md: 50, lg: 60, xl: 60 } }}>
        {props.title}
      </Typography>
      <Typography variant="b1" color="inherit" sx={{ mb: 3, fontSize: { xs: 18, sm: 20, md: 20, lg: 26, xl: 26 } }}>
        {props.heading}
      </Typography>
      <Box display="flex" sx={{ mb: 1 }}>
        {buttons}
      </Box>

      <Carousel dark interval={null}>
        {carouselItems}
      </Carousel>

      <Typography variant="h3" color="inherit" sx={{ mb: 1, mt: 3, fontWeight: "bold", fontSize: { xs: 26, sm: 30, md: 30, lg: 36, xl: 36 } }}>
        Skills
      </Typography>
      <Typography variant="b1" color="inherit" sx={{ fontSize: { xs: 16, sm: 18, md: 18, lg: 20, xl: 20 } }}>
        {props.skills}
      </Typography>
      <Typography variant="h3" color="inherit" sx={{ mb: 1, mt: 3, fontWeight: "bold", fontSize: { xs: 26, sm: 30, md: 30, lg: 36, xl: 36 } }}>
        Summary
      </Typography>
      <ul>
        {props.info.map((bullet) => (
          <li>
            <Typography variant="body1" color="inherit" sx={{ mb: 0, fontSize: { xs: 13, sm: 14, md: 16, lg: 18, xl: 18 } }}>
              {bullet}
            </Typography>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Project;
