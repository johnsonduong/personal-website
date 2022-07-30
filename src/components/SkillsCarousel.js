import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TechIcon = (props) => {
  return (
    <div className="tech-icon" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100px", height: "100px" }}>
      <img src={props.src} alt={props.label} style={{ width: "4em" }} />
      <figcaption style={{ fontSize: "12px", marginTop: "8px" }}>{props.label}</figcaption>
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
};

const SkillsCarousel = () => {
  return (
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} arrows={false} renderButtonGroupOutside={true}>
        <TechIcon src="https://img.icons8.com/color/60/000000/javascript--v1.png" label="JAVASCRIPT" />
        <TechIcon src="https://img.icons8.com/color/60/000000/html-5--v1.png" label="HTML5" />
        <TechIcon src="https://img.icons8.com/color/60/000000/css3.png" label="CSS3" />
        <TechIcon src="https://img.icons8.com/color/60/000000/python--v1.png" label="PYTHON3" />
        <TechIcon src="https://img.icons8.com/color/60/000000/react-native.png" label="REACTJS" />
        <TechIcon src="https://img.icons8.com/color/60/000000/nodejs.png" label="NODEJS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" label="EXPRESS" />
        <TechIcon src="https://img.icons8.com/color/60/000000/material-ui.png" label="MATERIALUI" />
        <TechIcon src="https://img.icons8.com/color/60/000000/amazon-web-services.png" label="AWS" />
        <TechIcon src="https://img.icons8.com/color/60/000000/mongodb.png" label="MONGODB" />
        <TechIcon src="https://img.icons8.com/color/48/000000/firebase.png" label="FIREBASE" />
        <TechIcon src="https://img.icons8.com/color/60/000000/flutter.png" label="FLUTTER" />
        <TechIcon src="https://img.icons8.com/color/60/000000/dart.png" label="DART" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" label="C++" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" label="SASS" />
        <TechIcon src="https://img.icons8.com/plasticine/100/000000/bash.png" label="BASH" />
        <TechIcon src="https://img.icons8.com/color/60/000000/git.png" label="GIT" />
        <TechIcon src="https://img.icons8.com/color/60/000000/npm.png" label="NPM" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" label="JIRA" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" label="FIGMA" />
      </Carousel>
    </div>
  );
};

export default SkillsCarousel;
