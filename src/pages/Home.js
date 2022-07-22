import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const Home = () => {
  return (
    <div className="Home">
      <Container maxWidth="lg" sx={{ border: "solid" }}>
        <Box sx={{ display: "flex", border: "none", mb: 5 }}>
          <Box sx={{ width: "20%", mr: 5 }}>
            <img src={require("../images/profile.jpeg")} alt="Me!" style={{ width: "100%" }} />
          </Box>
          <Box sx={{}}>
            <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
              {"Hey! I'm Johnson"}
            </Typography>
            <Typography variant="h4" component="p" color="initial" sx={{ fontWeight: "regular" }}>
              {"A Software Developer and Computer Engineering student @UWaterloo"}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" color="initial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil vitae atque nulla ea officia quod voluptatibus explicabo, omnis odio.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
