import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const Card = (props) => {
  return (
    <Box backgroundColor={props.backgroundColor}>
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", height: "400px" }}>
        <Box sx={{ width: "70%", py: 5 }}>
          <Typography variant="h3" color="initial" sx={{ mb: 1 }}>
            {props.title}
          </Typography>
          <Typography variant="h5" color="initial">
            {props.heading}
          </Typography>
          <Typography variant="body1" color="initial" sx={{ mb: 3 }}>
            {props.date}
          </Typography>
          <Typography variant="body1" color="initial">
            {props.info}
          </Typography>
        </Box>
        <Box>
          <img src={require("../images/profile.png")} alt="" style={{ width: "200px" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Card;
