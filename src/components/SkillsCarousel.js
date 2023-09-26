import Slider from "react-slick";
import Container from "@mui/material/Container";
import config from "../config.json";

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
  const techIcons = config.skills;

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
