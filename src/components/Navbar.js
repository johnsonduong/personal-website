import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;
const pages = ["home", "about", "projects", "experience", "contact"];

const NavButton = styled(Button)(({ theme }) => ({
  my: 3,
  px: 2,
  py: 1,
  color: "initial",
  boxShadow: "none",
  backgroundColor: "transparent",
  borderRadius: "0",
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: "#D7EBFF",
    color: "black",
  },
}));

function Navbar(props) {
  const { window } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNav = (event) => {
    event.currentTarget.textContent === "home" ? navigate(`/`) : navigate(`/${event.currentTarget.textContent}`);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        {"MENU"}
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem
            key={page}
            disablePadding
            onClick={handleNav}
            sx={{
              "&:hover, &.Mui-focusVisible": {
                backgroundColor: "#EDE6E3",
                color: "black",
              },
              backgroundColor: `${location.pathname === `/${page}` && "black"}`,
              color: `${location.pathname === `/${page}` && "white"}`,
            }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={page} primaryTypographyProps={{ fontWeight: "bold", textTransform: "uppercase" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static" component="nav" sx={{ backgroundColor: "transparent", boxShadow: 0, pt: 4, mb: 10 }}>
        <Container disableGutters maxWidth="lg" sx={{ border: "none" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", color: "black" }}>
            <Typography variant="h5" color="initial" fontWeight="bold" sx={{ fontSize: { xs: 15, sm: 20, md: 20, lg: 24, xl: 24 } }}>
              {"<jduong/>"}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, justifyContent: "space-evenly" }}>
              {pages.map((page) => (
                <NavButton variant="contained" key={page} onClick={handleNav} sx={{ mx: 0.5, backgroundColor: `${location.pathname === `/${page}` && "black"}`, color: `${location.pathname === `/${page}` && "white"}` }}>
                  <Typography variant="body1" color="inherit" sx={{ fontWeight: "bold", fontSize: { xs: 14, sm: 14, md: 14, lg: 16, xl: 16 } }}>
                    {page}
                  </Typography>
                </NavButton>
              ))}
            </Box>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hamburger Menu */}
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
