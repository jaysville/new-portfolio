import { GitHub } from "@mui/icons-material";
// import { Carousel } from "react-bootstrap";
import { Carousel } from "antd";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  const { title, desc, images, repo, live } = project;
  return (
    <Style>
      {/* <Slider>
        {images.map((image, i) => {
          return <img src={image} alt="project" key={i} />;
        })}
      </Slider> */}
      <div className="img-container">
        <img src={images[1]} alt="project" />
      </div>

      <div className="content">
        <h5>{title}</h5>
        <p>{desc}</p>
        <div className="links">
          <a href={live}>View Live</a>
          <a href={repo}>
            <GitHub />
          </a>
        </div>
      </div>
    </Style>
  );
};

export default ProjectCard;

const Style = styled.div`
  @import url("bootstrap/dist/css/bootstrap.min.css");
  padding: 5px;
  background-color: #212529;
  margin-bottom: 30px;

  width: 315px;

  border-radius: 7px;

  h5 {
    margin-bottom: 20px;
    font-size: 22px;
    color: #f0f8ff;
  }

  div.content {
    padding: 7px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100%;
    height: 210px;
    border-radius: 5px;
  }
  .links {
    display: flex;
  }
  a {
    border: 1px solid #00f7ff;
    padding: 8px 16px;
    width: auto;
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
    margin-right: 20px;
  }
  p {
    color: #bbc6e8;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

const Slider = styled(Carousel)`
  margin-bottom: 30px;
`;
