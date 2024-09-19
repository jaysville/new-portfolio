import styled from "styled-components";
import ThinLine from "../components/ui/ThinLine";

const About = () => {
  return (
    <Style id="about">
      <div>
        <h3>About Me</h3>
        <ThinLine />
      </div>

      <p>
        I’m Joshua, a passionate <span>fullstack developer</span> with a knack
        for creating seamless and dynamic web applications. With a strong
        foundation in the
        <span> MERN </span> stack (MongoDB, Express.js, React, Node.js), I
        thrive on turning complex problems into elegant solutions. My journey in
        <span> web development </span>has been fueled by my love for{" "}
        <span>problem solving</span>, and I enjoy diving into the latest
        technologies to keep my skills up to date. When I’m not coding, you’ll
        likely find me destroying my body at the gym.
      </p>
    </Style>
  );
};

const Style = styled.section`
  margin-top: 50px;
  div {
    display: flex;
  }
  h3 {
    width: 130px;
  }

  p {
    line-height: 30px;
    max-width: 700px;
    color: #bbc6e8;

    @media (max-width: 450px) {
      line-height: 20px;
    }
  }
  span {
    color: #00f7ff;
  }
`;

export default About;
