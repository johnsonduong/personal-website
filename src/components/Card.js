import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const Card = (props) => {
  return (
    <Box backgroundColor={props.backgroundColor} sx={{ flexGrow: 1, height: "60vh" }}>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "row", flexFlow: 1, justifyContent: "flex-start", p: 10 }}>
        <Box sx={{ width: "50%", mr: 15 }}>
          <Typography variant="h3" color="initial" sx={{ mb: 2 }}>
            {props.title}
          </Typography>
          <Typography variant="h5" color="initial">
            {props.heading}
          </Typography>
          <Typography variant="body1" color="initial" sx={{ mb: 5 }}>
            {props.date}
          </Typography>
          <Typography variant="body1" color="initial">
            {props.info}
          </Typography>
        </Box>
        <img src={require("../images/profile.png")} alt="" style={{ width: "20vw" }} />
      </Container>
    </Box>
  );
};

export default Card;
