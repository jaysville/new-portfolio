import { Mail, Phone } from "@mui/icons-material";
import styled from "styled-components";
import { ProfileLinks } from "./Landing";

const Contact = () => {
  return (
    <Style id="contact">
      <h3>Get In Touch</h3>
      <p>
        Need a skilled Web Developer or Technical Writer? I’m available for
        freelance or contract work.
        <br /> Let’s connect and discuss how I can help with your projects!
      </p>
      <div className="contacts">
        <span>
          <Phone />
          <a href="tel:+2347033956870">+234-703-395-6870</a>
        </span>
        <span>
          <Mail />
          <a href="mailto:olaotanabarowei@gmail.com">
            olaotanabarowei@gmail.com
          </a>
        </span>
      </div>
      <ul>
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
    </Style>
  );
};

export default Contact;

const Style = styled.section`
  text-align: center;
  .contacts {
    display: grid;
    place-items: center;
    span {
      margin-bottom: 20px;
    }
  }
  h3 {
    margin-bottom: 30px;
    color: #00f7ff;
  }
  p {
    margin-bottom: 30px;
  }
  span {
    display: inline-flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;
