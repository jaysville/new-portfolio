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
    @media (max-width: 935px) {
      display: grid;
      /* place-items: center; */
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    @media (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
    }
  }
`;
