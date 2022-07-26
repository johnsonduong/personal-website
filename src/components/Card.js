import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const Card = (props) => {
  return (
    <Box className="card">
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", height: "500px" }}>
        <Box sx={{ width: "70%", py: 5 }}>
          <Typography variant="h3" color="inherit" sx={{ mb: 1 }}>
            {props.title}
          </Typography>
          <Typography variant="h5" color="inherit">
            {props.heading}
          </Typography>
          <Typography variant="body1" color="inherit" sx={{ mb: 3 }}>
            {props.date}
          </Typography>
          <Typography variant="body1" color="inherit">
            {props.info}
          </Typography>
        </Box>
        <Box sx={{ ml: 10 }}>
          <img src={props.imagePath} alt="" style={{ width: "200px" }} />
        </Box>
      </Container>
    </Box>
  );
};

Card.defaultProps = {
  title: "Title",
  heading: "Heading",
  date: "Date",
  info: "Info",
  imagePath: require("../images/profile.png"),
};

export default Card;
