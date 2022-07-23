import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Card from "../components/Card";

const Experience = () => {
  return (
    <div className="Experience">
      <Container maxWidth="lg" sx={{ border: "none", flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
          {"Experience"}
        </Typography>
      </Container>
      <Card
        title="ELL Technologies"
        heading="Software Developer"
        date="May 2022 - Aug 2022"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam officiis cum doloremque earum quo dicta impedit nobis aperiam illo."
        backgroundColor="#d9d9d9"
      ></Card>
      <Card
        title="Toyota Motors"
        heading="Facilities Engineer"
        date="May 2021 - Aug 2021"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam officiis cum doloremque earum quo dicta impedit nobis aperiam illo."
        backgroundColor="transparent"
      ></Card>
      <Card
        title="UWaterloo"
        heading="R&D Engineer"
        date="Sep 2020 - Dec 2020"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam officiis cum doloremque earum quo dicta impedit nobis aperiam illo."
        backgroundColor="#d9d9d9"
      ></Card>
    </div>
  );
};

export default Experience;
