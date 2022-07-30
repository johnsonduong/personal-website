import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Card = (props) => {
  const buttonsArray = props.buttons.split(" ");

  const buttons = buttonsArray.map((button) => (
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
  ));

  return (
    <Box className="card">
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", minHeight: "500px" }}>
        <Box sx={{ py: 5, width: 1000, mr: 5 }}>
          <Typography variant="h3" color="inherit" sx={{ mb: 1, fontSize: { xs: 30, sm: 36, md: 40, lg: 48, xl: 48 } }}>
            {props.title}
          </Typography>
          <Typography variant="h5" color="inherit" sx={{ fontSize: { xs: 18, sm: 18, md: 20, lg: 25, xl: 25 } }}>
            {props.heading}
          </Typography>
          <Typography variant="body1" color="inherit" sx={{ mb: 3, fontSize: { xs: 14, sm: 14, md: 14, lg: 16, xl: 16 } }}>
            {props.meta}
          </Typography>
          <Typography variant="body1" color="inherit" sx={{ mb: 3, fontSize: { xs: 13, sm: 14, md: 16, lg: 18, xl: 18 } }}>
            {props.info}
          </Typography>
          {props.buttons != "" && buttons}
        </Box>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
          <img className="company-logo" src={props.imagePath} alt="" style={{ width: "180px", backgroundColor: "white", marginLeft: 10 }} />
        </Box>
      </Container>
    </Box>
  );
};

Card.defaultProps = {
  title: "Title",
  heading: "Heading",
  date: "Date",
  info: "Info",
  imagePath: require("../images/profile.png"),
};

export default Card;
