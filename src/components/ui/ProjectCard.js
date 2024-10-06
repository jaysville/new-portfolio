import { GitHub } from "@mui/icons-material";

import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectCard = ({ project }) => {
  const { title, desc, images, repo, live } = project;
  return (
    <Style>
      <div className="carousel-container">
        <Slider showThumbs={false} autoPlay={true} infiniteLoop={true}>
          {images.map((image, i) => (
            <div key={i}>
              <img src={image} alt="project" className="d-block w-100" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="content">
        <h5>{title}</h5>
        <p>{desc}</p>
        <div className="links">
          <a href={live} className="btn btn-primary">
            View Live
          </a>
          <a href={repo} className="btn btn-secondary">
            <GitHub />
          </a>
        </div>
      </div>
    </Style>
  );
};

export default ProjectCard;

const Style = styled.div`
  padding: 5px 0;
  background-color: #212529;
  margin-bottom: 30px;
  border-radius: 7px;
  display: flex;

  h5 {
    margin-bottom: 20px;
    font-size: 22px;
    color: #f0f8ff;
  }

  div.content {
    padding: 4px;
  }

  .carousel-container {
    margin-right: 30px;
    width: 450px;
    img {
      width: 450px;
      height: 270px;
      border-radius: 5px;
    }
  }

  @media (max-width: 935px) {
    flex-direction: column;
    padding: 5px;
    width: 350px;
    .carousel-container {
      width: 100%;
      margin-right: 0px;
      img {
        width: 100%;
        /* height: 192px; */
      }
    }
  }

  @media (max-width: 450px) {
    width: 100%;
  }

  .links {
    display: flex;
    gap: 10px;
  }

  a {
    border: 1px solid #00f7ff;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
  }

  p {
    color: #bbc6e8;
  }
`;

const Slider = styled(Carousel)``;
