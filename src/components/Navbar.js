import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { styled } from "@mui/material/styles";

const pages = ["home", "about", "projects", "experience", "contact"];

const NavButton = styled(Button)(({ theme }) => ({
  my: 3,
  px: 2,
  py: 1,
  color: "initial",
  borderRadius: "0",
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: "gray",
    color: "white",
  },
}));

const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNav = (event) => {
    event.currentTarget.textContent === "home" ? navigate(`/`) : navigate(`/${event.currentTarget.textContent}`);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: 0, pt: 4, mb: 10 }}>
      <Container disableGutters maxWidth="lg" sx={{ border: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" color="initial" fontWeight="bold">
            {"<jduong/>"}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            {pages.map((page) => (
              <NavButton key={page} onClick={handleNav} sx={{ backgroundColor: `${location.pathname === `/${page}` && "black"}`, color: `${location.pathname === `/${page}` && "white"}` }}>
                <Typography variant="body1" color="inherit" sx={{ fontWeight: "bold" }}>
                  {page}
                </Typography>
              </NavButton>
            ))}
          </Box>

          {/* Small Window */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
