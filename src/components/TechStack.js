import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import SkillsCarousel from "./SkillsCarousel";

const TechStackIcon = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "solid", width: "100px", height: "100px" }}>
      <img src={props.src} alt={props.label} style={{ width: "1em" }} />
      <figcaption style={{ fontSize: "10px" }}>{props.label}</figcaption>
    </div>
  );
};

const TechStack = () => {
  return (
    <div>
      <SkillsCarousel show={1}>
        <TechStackIcon src="https://img.icons8.com/color/60/000000/javascript--v1.png" label="JAVASCRIPT" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/html-5--v1.png" label="HTML5" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/css3.png" label="CSS3" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/python--v1.png" label="PYTHON3" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/nodejs.png" label="NODEJS" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/mongodb.png" label="MONGODB" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/react-native.png" label="REACTJS" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/amazon-web-services.png" label="AWS" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/material-ui.png" label="MATERIALUI" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/git.png" label="GIT" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/jira.png" label="JIRA" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/npm.png" label="NPM" />
      </SkillsCarousel>
    </div>
  );
};

export default TechStack;
