import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const Home = () => {
  return (
    <div className="Home">
      <Container maxWidth="lg" sx={{ border: "none", flexGrow: 1, mt: 2 }}>
        <Box sx={{ display: "flex", border: "none", mb: 5 }}>
          <Box sx={{ mt: 14 }}>
            <Typography variant="h1" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 2, px: 20 }}>
              {"Johnson Duong"}
            </Typography>
            <Typography variant="h4" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 0, px: 20 }}>
              {"Software Developer"}
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
