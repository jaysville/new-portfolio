import styled from "styled-components";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const Landing = () => {
  return (
    <Style>
      <div className="intro">
        <span>
          Hello, I'm <span style={{ color: " #00f7ff" }}>Joshua</span> ,
        </span>
        <h2>
          A <span>Fullstack</span> Web Developer <br /> <span>&&</span> <br />
          Technical <span>Writer</span> .
        </h2>
        <ul className="socials-link ">
          {ProfileLinks.map(({ icon, link }, i) => {
            return (
              <li
                key={i}
                className="animate__animated animate__pulse animate__infinite"
              >
                <a href={link}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="landing-vector">
        <img
          src={`${process.env.PUBLIC_URL}/assets/landing.png`}
          alt="landing"
          className="animate__animated animate__pulse animate__infinite"
        />
      </div>
    </Style>
  );
};

export default Landing;

const Style = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 50px;
  margin-bottom: 100px;
  img {
    width: 450px;
    margin-left: 70px;
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(1, 1fr);
    div.landing-vector {
      display: grid;
      img {
        width: 90%;
        justify-self: center;
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
  h2 {
    font-size: 45px;
    span {
      color: #00f7ff;
    }
  }
  @media (max-width: 420px) {
    h2 {
      font-size: 35px;
      margin-bottom: 60px;
    }
    .intro {
      margin-bottom: 50px;
    }
  }
  ul.socials-link {
    display: flex;

    color: #bbc6e8;
    li {
      margin-right: 20px;
      svg {
        transform: scale(1.1);
      }
      cursor: pointer;
    }
  }
`;

export const ProfileLinks = [
  {
    link: "https://www.linkedin.com/in/olaotan-abarowei-a9a49b184/",
    icon: <LinkedInIcon />,
  },
  {
    link: "https://github.com/jaysville?",
    icon: <GitHubIcon />,
  },

  {
    link: "https://medium.com/@olaotanabarowei",
    icon: <NewspaperIcon />,
  },
];
