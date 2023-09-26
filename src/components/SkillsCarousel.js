import Slider from "react-slick";
import Container from "@mui/material/Container";

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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" label="PYTHON" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" label="JAVASCRIPT" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" label="TYPESCRIPT" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" label="REACTJS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" label="NODEJS" />
        <TechIcon src="https://img.icons8.com/color/300/postgreesql.png" label="POSTGRESQL" />
        <TechIcon src="https://img.icons8.com/color/300/redis--v1.png" label="REDIS" />
        <TechIcon src="https://img.icons8.com/color/300/docker.png" label="DOCKER" />
        <TechIcon src="https://img.icons8.com/color/300/amazon-web-services.png" label="AWS" />
        <TechIcon src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/300/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" label="POSTMAN" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" label="C" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" label="C++" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" label="JAVA" />
        <TechIcon src="https://img.icons8.com/color/300/000000/dart.png" label="DART" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" label="VUEJS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" label="BOOTSTRAP" />
        <TechIcon src="https://img.icons8.com/color/300/000000/material-ui.png" label="MATERIALUI" />
        <TechIcon src="https://img.icons8.com/color/300/000000/flutter.png" label="FLUTTER" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" label="HTML5" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" label="CSS3" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" label="SASS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" label="EXPRESS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" label="MS SQL SERVER" />
        <TechIcon src="https://img.icons8.com/color/300/000000/google-firebase-console.png" label="FIREBASE" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" label="MONGODB" />
        <TechIcon src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" label="MONGOOSE" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" label="GIT" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" label="BASH" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" label="LINUX" />
        <TechIcon src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/300/null/external-development-experience-through-the-native-integrations-of-azure-with-visual-studio-logo-shadow-tal-revivo.png" label="AZURE DEVOPS" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" label="JIRA" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" label="HEROKU" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" label="MATLAB" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" label="FIGMA" />
        <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" label="NPM" />
      </Slider>
    </Container>
  );
};

export default SkillsCarousel;
