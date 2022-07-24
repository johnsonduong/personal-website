import React from "react";
import { Typography, Grid, TextField, Button, Card, CardContent } from "@mui/material";

const ContactForm = () => {
  return (
    <div>
      <Grid>
        <Card style={{ minWidth: 450, padding: "20px 5px", backgroundColor: "transparent", boxShadow: "none" }}>
          <CardContent>
            <Typography variant="body1" component="p" gutterBottom>
              Let's get in touch! Whether you have a question or just want to chat, you can message me here and I will get back to you.
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField placeholder="Enter your name" label="Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
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
