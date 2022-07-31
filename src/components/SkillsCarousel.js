import Slider from "react-slick";

const TechIcon = (props) => {
  return (
    <div className="tech-icon" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100px", height: "100px" }}>
      <img src={props.src} alt={props.label} style={{ width: "4em" }} />
      <figcaption style={{ fontSize: "12px", marginTop: "8px" }}>{props.label}</figcaption>
    </div>
  );
};

const SkillsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
