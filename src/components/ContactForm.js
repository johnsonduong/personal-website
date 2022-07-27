import React from "react";
import { Typography, Grid, TextField, Button, Card, CardContent } from "@mui/material";

import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "&.MuiTextField-root": {
    border: "solid 3px black",
  },
}));

const ContactForm = (props) => {
  return (
    <div>
      <Grid>
        <Card sx={{ minWidth: 450, p: 0, m: 0, backgroundColor: "transparent", boxShadow: "none" }}>
          <CardContent sx={{ px: 1 }}>
            <Typography variant="h6" component="p" gutterBottom>
              Let's get in touch! Whether you have a question or just want to chat, you can message me here.
            </Typography>
            <form onSubmit={props.handleSubmit}>
              <Grid container spacing={1.5}>
                <Grid xs={12} item>
                  <CustomTextField placeholder="Enter your name" label="Name" variant="filled" fullWidth required onChange={(e) => props.setName(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField type="email" placeholder="Enter email" label="Email" variant="filled" fullWidth required onChange={(e) => props.setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField label="Message" multiline rows={4} placeholder="Type your message here" variant="filled" fullWidth required onChange={(e) => props.setMessage(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      my: 3,
                      px: 2,
                      py: 1,
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 16,
                      backgroundColor: "white",
                      border: "solid black 3px",
                      borderRadius: "0",
                      "&:hover, &.Mui-focusVisible": {
                        backgroundColor: "black",
                        color: "white",
                      },
                      boxShadow: "none",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default ContactForm;
