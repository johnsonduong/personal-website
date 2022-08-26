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
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
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
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                Explore
              </Button>
            )}
          </Box>

          {/* Allow video previews */}
          {/* {props.images[props.preview].split(".")[props.images[props.preview].split(".").length - 1] === "webm?raw=true" ? (
            <Box sx={{ width: 550, height: 400, overflow: "hidden" }}>
              <video playsinline autoplay muted loop style={{ width: "auto", height: "100%" }}>
                <source src={props.images[props.preview]} type="video/webm" />
              </video>
            </Box>
          ) : (
            <Box sx={{ width: 550, height: 400, backgroundImage: `url(${props.images[props.preview]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          )} */}
          <Box sx={{ width: 550, height: 400, backgroundImage: `url(${props.images[props.preview]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
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
