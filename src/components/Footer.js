import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { styled } from "@mui/material/styles";

const SocialIcon = styled("img")(({ theme }) => ({
  padding: "0.5em",
}));

export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      GitHub
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      LinkedIn
    </Tooltip>
  );

  return (
    <Container disableGutters sx={{ backgroundColor: "transparent", display: "flex", justifyContent: "flex-end", position: "sticky", bottom: 0, py: 2 }}>
      <Box sx={{ backgroundColor: "none" }} value={value} onChange={handleChange}>
        <OverlayTrigger placement="top" overlay={renderTooltip1}>
          <a href="https://github.com/johnsonduong" type="button" target="_blank" rel="noreferrer" style={{ marginRight: 5 }}>
            <SocialIcon className="social-icon" src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
          </a>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={renderTooltip2}>
          <a href="https://www.linkedin.com/in/johnsonduong/" type="button" target="_blank" rel="noreferrer" style={{ marginRight: 5 }}>
            <SocialIcon className="social-icon" src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png" />
          </a>
        </OverlayTrigger>
      </Box>
    </Container>
  );
}
