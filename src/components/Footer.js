import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

const SocialIcon = styled("img")(({ theme }) => ({
  padding: "0.5em",
}));

export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container disableGutters maxWidth="lg" sx={{ backgroundColor: "transparent", display: "flex", justifyContent: "flex-end", position: "sticky", bottom: 0 }}>
      <Box sx={{ backgroundColor: "none" }} value={value} onChange={handleChange}>
        <a href="https://github.com/johnsonduong" target="_blank" rel="noreferrer">
          <SocialIcon src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/johnsonduong/" target="_blank" rel="noreferrer">
          <SocialIcon src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png" />
        </a>
      </Box>
    </Container>
  );
}
