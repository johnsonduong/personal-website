import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";

const ExperienceCard = (props) => {
  const buttons = props.buttons.map((button, index) => (
    <a href={props.links[index]} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
      <Button
        variant="text"
        color="inherit"
        sx={{
          mr: 1,
          borderRadius: 0,
          fontWeight: "bold",
          "&:hover, &.Mui-focusVisible": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        {button}
        <CallMadeIcon />
      </Button>
    </a>
  ));

  return (
    <Box className={`card ${props.className}`}>
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", minHeight: "500px" }}>
        <Box sx={{ py: 5, width: 1500, mr: 5 }}>
          <Typography variant="h3" color="inherit" sx={{ mb: 0.5, fontWeight: "bold", fontSize: { xs: 26, sm: 30, md: 30, lg: 36, xl: 36 } }}>
            {props.title}
          </Typography>
          <Typography variant="h5" color="inherit" sx={{ mb: 0.5, fontSize: { xs: 18, sm: 18, md: 20, lg: 25, xl: 25 } }}>
            {props.heading}
          </Typography>
          <Typography variant="body1" color="inherit" sx={{ mb: 2, fontSize: { xs: 14, sm: 14, md: 14, lg: 16, xl: 16 } }}>
            {props.meta}
          </Typography>
          <ul>
            {props.info.map((bullet) => (
              <li>
                <Typography variant="body1" color="inherit" sx={{ mb: 0, fontSize: { xs: 13, sm: 14, md: 16, lg: 18, xl: 18 } }}>
                  {bullet}
                </Typography>
              </li>
            ))}
          </ul>
          {props.buttons !== "" && buttons}
        </Box>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
          {props.className === "project-card" ? (
            <img className="project-photo" src={props.imagePath} alt="" style={{ height: "300px", marginLeft: 10 }} />
          ) : (
            <img className="company-logo" src={props.imagePath} alt="" style={{ width: "120px", backgroundColor: "none", marginLeft: 10 }} />
          )}
        </Box>
      </Container>
    </Box>
  );
};

ExperienceCard.defaultProps = {
  title: "Title",
  heading: "Heading",
  date: "Date",
  info: "Info",
};

export default ExperienceCard;
