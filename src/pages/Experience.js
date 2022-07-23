import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const Experience = () => {
  return (
    <div className="Experience">
      <Container maxWidth="lg" sx={{ border: "solid", flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
          {"Work Experience"}
        </Typography>
      </Container>
    </div>
  );
};

export default Experience;
