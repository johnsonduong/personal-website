import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const Home = () => {
  return (
    <div className="Home">
      <Container maxWidth="lg" sx={{ border: "solid", flexGrow: 1 }}>
        <Box sx={{ display: "flex", border: "none", mb: 5 }}>
          <Box sx={{ width: "40%", mr: 5 }}>
            <img src={require("../images/profile.png")} alt="Me!" style={{ width: "25em" }} />
          </Box>
          <Box sx={{}}>
            <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
              {"I'm Johnson"}
            </Typography>
            <Typography variant="h4" component="p" color="initial" sx={{ fontWeight: "regular" }}>
              {"A Software Developer"}
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
