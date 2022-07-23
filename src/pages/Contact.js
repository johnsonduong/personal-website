import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="Contact">
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
          {"Contact"}
        </Typography>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
