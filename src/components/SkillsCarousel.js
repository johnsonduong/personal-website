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

  const techIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "PYTHON" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JAVASCRIPT" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TYPESCRIPT" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "REACTJS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", label: "NODEJS" },
    { src: "https://img.icons8.com/color/300/postgreesql.png", label: "POSTGRESQL" },
    { src: "https://img.icons8.com/color/300/redis--v1.png", label: "REDIS" },
    { src: "https://img.icons8.com/color/300/docker.png", label: "DOCKER" },
    { src: "https://img.icons8.com/color/300/amazon-web-services.png", label: "AWS" },
    { src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/300/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png", label: "POSTMAN" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "JAVA" },
    { src: "https://img.icons8.com/color/300/000000/dart.png", label: "DART" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", label: "VUEJS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", label: "BOOTSTRAP" },
    { src: "https://img.icons8.com/color/300/000000/material-ui.png", label: "MATERIALUI" },
    { src: "https://img.icons8.com/color/300/000000/flutter.png", label: "FLUTTER" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", label: "SASS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", label: "EXPRESS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", label: "MS SQL SERVER" },
    { src: "https://img.icons8.com/color/300/000000/google-firebase-console.png", label: "FIREBASE" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MONGODB" },
    { src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png", label: "MONGOOSE" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "GIT" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", label: "BASH" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", label: "LINUX" },
    { src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/300/null/external-development-experience-through-the-native-integrations-of-azure-with-visual-studio-logo-shadow-tal-revivo.png", label: "AZURE DEVOPS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", label: "JIRA" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg", label: "HEROKU" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg", label: "MATLAB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "FIGMA" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", label: "NPM" },
  ];

  return (
    <Container>
      <Slider {...settings}>
        {techIcons.map((tech, index) => (
          <TechIcon key={index} {...tech} />
        ))}
      </Slider>
    </Container>
  );
};

export default SkillsCarousel;
