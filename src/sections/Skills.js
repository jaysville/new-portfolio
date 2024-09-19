import styled from "styled-components";
import StorageIcon from "@mui/icons-material/Storage";
import ThinLine from "../components/ui/ThinLine";
import { ReactIcon } from "../components/ui/Icons";

const Skills = () => {
  return (
    <Style id="skills">
      <div className="heading">
        <h3>Skills</h3> <ThinLine />
      </div>
      <div className="skills">
        <div className="end">
          <div className="front-logo">{ReactIcon}</div>

          <div>
            <span className="title">Front-End</span>
            <p>
              HTML, CSS, JavaScript , <span>ReactJs</span>, NextJs ,
              <span> Material UI</span> , Ant Design,{" "}
              <span> Redux Toolkit</span> , and Styled Components
            </p>
          </div>
        </div>
        <div className="end">
          <div className="back-logo">
            <BackendIcon />
          </div>

          <div className="backend">
            <div>
              <span className="title">Back-End</span>
            </div>
            <p>
              NodeJs,<span> Express Js</span> , SQL, <br />{" "}
              <span>Mongo DB</span> , and <span>Graph QL</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Skills;

const Style = styled.section`
  margin-top: 70px;

  p {
    max-width: 300px;
    line-height: 30px;
    color: #bbc6e8;
    transform: translateY(-10px);
    span {
      color: #00f7ff;
    }
  }
  div.heading {
    display: flex;

    @media (max-width: 750px) {
    }
  }

  span.title {
    font-size: 20px;

    font-weight: bold;
  }
  div.skills {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 750px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  div.end {
    @media (max-width: 750px) {
      display: flex;
      transform: scale(0.9);
      .backend {
        transform: translateX(40px);
      }
    }
  }
  .front-logo {
    @media (max-width: 750px) {
      transform: translateX(-20px) translateY(-10px);
      display: grid;
      place-items: center;
    }
  }
  .back-logo {
    @media (max-width: 750px) {
      display: grid;
      place-items: center;
      transform: translateX(-20px);
    }
  }
`;

const BackendIcon = styled(StorageIcon)`
  transform: scale(1.7) translateX(10px) translateY(-10px);
  margin-top: 22px;
  margin-bottom: 18px;
  color: #bbc6e8;
`;
