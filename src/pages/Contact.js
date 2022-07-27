import { React, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import ContactForm from "../components/ContactForm";
import { colRef, addDoc } from "../index.js";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      name: name,
      email: email,
      message: message,
    }).then(() => {
      e.target.reset();
      setName("");
      setEmail("");
      setMessage("");
    });
  };

  return (
    <div className="Contact">
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="h1" color="initial" sx={{ fontWeight: "bold", mb: 3 }}>
          {"Contact"}
        </Typography>
        <ContactForm handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setMessage={setMessage} />
      </Container>
    </div>
  );
};

export default Contact;
