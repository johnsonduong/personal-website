import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const TechStackIcon = styled("img")(({ theme }) => ({
  padding: "0.5em",
}));

const SocialIcon = styled("img")(({ theme }) => ({
  padding: "0.5em",
}));

const Home = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ border: "none" }}>
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
        <Box sx={{ border: "none", mb: 15 }}>
          <a href="https://github.com/johnsonduong" target="_blank" rel="noreferrer">
            <SocialIcon src="https://img.icons8.com/ios-glyphs/40/000000/github.png" />
          </a>
          <a href="https://www.linkedin.com/in/johnsonduong/" target="_blank" rel="noreferrer">
            <SocialIcon src="https://img.icons8.com/ios-glyphs/40/000000/linkedin-2--v1.png" />
          </a>
        </Box>
        <Box sx={{ border: "none" }}>
          <Typography variant="h4" component="h1" color="initial" sx={{ fontWeight: "bold" }}>
            {"Languages & Tools"}
          </Typography>
          <TechStackIcon src="https://img.icons8.com/color/60/000000/javascript--v1.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/html-5--v1.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/css3.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/python--v1.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/nodejs.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/mongodb.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/react-native.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/amazon-web-services.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/material-ui.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/git.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/jira.png" />
          <TechStackIcon src="https://img.icons8.com/color/60/000000/npm.png" />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
