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
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" label="JAVASCRIPT" />
        {/* <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" label="TYPESCRIPT" /> */}
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" label="REACTJS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" label="NODEJS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" label="EXPRESS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" label="MONGODB" />
        <TechIcon src="https://img.icons8.com/color/300/000000/google-firebase-console.png" label="FIREBASE" />
        <TechIcon src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" label="MONGOOSE" />
        <TechIcon src="https://img.icons8.com/color/300/000000/flutter.png" label="FLUTTER" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" label="PYTHON" />
        <TechIcon src="https://img.icons8.com/color/300/000000/dart.png" label="DART" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" label="C++" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" label="JAVA" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" label="BOOTSTRAP" />
        <TechIcon src="https://img.icons8.com/color/300/000000/material-ui.png" label="MATERIALUI" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" label="SASS" />
        {/* <TechIcon src="https://img.icons8.com/color/60/000000/amazon-web-services.png" label="AWS" /> */}
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" label="HTML5" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" label="CSS3" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" label="LINUX" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" label="BASH" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" label="GIT" />
        <TechIcon src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/300/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" label="POSTMAN" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" label="JIRA" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" label="MATLAB" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" label="FIGMA" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" label="NPM" />
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
