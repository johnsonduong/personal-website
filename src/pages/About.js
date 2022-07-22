import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
const TechStackIcon = styled("img")(({ theme }) => ({
  padding: "0.5em",
}));

const About = () => {
  return (
    <div className="About">
      {" "}
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
    </div>
  );
};

export default About;
