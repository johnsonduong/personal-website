import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TechStackIcon = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100px", height: "100px" }}>
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
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
};

const SkillsCarousel = () => {
  return (
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} arrows={false}>
        <TechStackIcon src="https://img.icons8.com/color/60/000000/javascript--v1.png" label="JAVASCRIPT" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/html-5--v1.png" label="HTML5" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/css3.png" label="CSS3" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/python--v1.png" label="PYTHON3" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/nodejs.png" label="NODEJS" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/mongodb.png" label="MONGODB" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/react-native.png" label="REACTJS" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/amazon-web-services.png" label="AWS" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/material-ui.png" label="MATERIALUI" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/git.png" label="GIT" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/jira.png" label="JIRA" />
        <TechStackIcon src="https://img.icons8.com/color/60/000000/npm.png" label="NPM" />
      </Carousel>
    </div>
  );
};

export default SkillsCarousel;
