import { React, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const handleNav = (event) => {
    navigate(`/projects/${props.id}`);
  };

  return (
    <Container
      className="project-card"
      maxWidth="lg"
      onClick={handleNav}
      disableGutters
      sx={{ display: "flex", flexGrow: 1, justifyContent: "center", alignItems: "center", minHeight: "400px", mb: 5, p: 0, boxShadow: "0px 3px 20px #616161" }}
      onMouseOver={() => setShowInfo(true)}
      onMouseOut={() => setShowInfo(false)}
    >
      <a style={{ display: "inline-block", width: "100%", backgroundColor: "white", textDecoration: "none", color: "black" }} href="">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", flexGrow: 1 }}>
          <Box sx={{ py: 5, pl: 8 }}>
            <Typography variant="h3" color="inherit" sx={{ fontWeight: "bold", fontSize: { xs: 30, sm: 36, md: 36, lg: 40, xl: 40 } }}>
              {props.title}
            </Typography>
            {showInfo && (
              <Typography variant="h5" color="inherit" sx={{ fontSize: { xs: 18, sm: 18, md: 20, lg: 22, xl: 22 } }}>
                {props.heading}
              </Typography>
            )}

            {showInfo ? (
              <Button
                onClick={handleNav}
                sx={{
                  mt: 2,
                  px: 2,
                  borderRadius: 0,
                  border: "solid black 3px",
                  fontWeight: "bold",
                  boxShadow: "none",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Explore
              </Button>
            ) : (
              <Button
                onClick={handleNav}
                sx={{
                  mt: 2,
                  px: 2,
                  borderRadius: 0,
                  border: "solid black 3px",
                  fontWeight: "bold",
                  boxShadow: "none",
                  color: "black",
                  backgroundColor: "white",
                }}
              >
                Explore
              </Button>
            )}
          </Box>
          <Box sx={{ width: 550, height: 400, backgroundImage: props.images.length > 1 ? `url(${props.images[1]})` : `url(${props.images[0]})`, backgroundSize: "cover", backgroundPosition: "center" }}></Box>
        </Box>
      </a>
    </Container>
  );
};

ProjectCard.defaultProps = {
  title: "Title",
  heading: "Heading",
  date: "Date",
  info: "Info",
};

export default ProjectCard;
