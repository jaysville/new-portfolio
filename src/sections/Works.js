import styled from "styled-components";
import ThinLine from "../components/ui/ThinLine";
import ProjectCard from "../components/ui/ProjectCard";
import { ProjectData } from "../ProjectData";

const Works = () => {
  return (
    <Style id="works">
      <div className="heading">
        <h3>Works</h3>
        <ThinLine />
      </div>
      <div className="projects">
        {ProjectData.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </div>
    </Style>
  );
};

export default Works;

const Style = styled.section`
  .heading {
    display: flex;
  }
  .projects {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
    }
    @media (max-width: 780px) {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
    }
  }
`;
