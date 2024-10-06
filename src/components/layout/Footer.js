import { Code } from "@mui/icons-material";
import styled from "styled-components";

const Footer = () => {
  return (
    <Style>
      <hr />
      <br />
      <span className="logo">
        <Code /> Jaysville
      </span>
      <span className="title">
        Web Developer <span>&&</span> Technical Writer.
      </span>
    </Style>
  );
};
export default Footer;

const Style = styled.footer`
  text-align: center;
  margin-top: 20px;
  padding-bottom: 30px;
  span {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
  }
  svg {
    color: #00f7ff;
    transform: scale(1.3) translateX(-10px) translateY(-1px);
  }

  .title {
    margin-top: 10px;
    font-size: 13px;

    span {
      color: #00f7ff;

      margin: 0 5px;
    }
  }
`;
