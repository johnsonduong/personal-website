import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExperienceCard from "../components/ExperienceCard";
import config from "../config.json";

import fifthImage from "../images/relay-logo.png";
import fourthImage from "../images/wsp-logo.png";
import thirdImage from "../images/ell-logo.png";
import secondImage from "../images/toyota-logo.png";
import firstImage from "../images/uwaterloo-logo.png";

const imageArray = [fifthImage, fourthImage, thirdImage, secondImage, firstImage];

const Experience = () => {
  const experiences = config.experience.map((experience, index) => {
    return (
      <ExperienceCard
        className="experience-card"
        title={experience.company}
        heading={experience.jobTitle}
        meta={experience.meta}
        info={experience.info}
        backgroundColor={experience.backgroundColor}
        imagePath={imageArray[index]}
        buttons={experience.buttons}
        links={experience.links}
      />
    );
  });

  return (
    <div className="Experience">
      <Container maxWidth="lg" sx={{ border: "none", flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3, fontSize: { xs: 40, sm: 40, md: 50, lg: 60, xl: 60 } }}>
          {"Experience"}
        </Typography>
      </Container>
      {experiences}
    </div>
  );
};

export default Experience;
