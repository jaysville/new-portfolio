import styled from "styled-components";

const ThinLine = styled.div`
  height: 1px;
  width: 200px;
  background-color: #00f7ff;
  align-self: center;
  margin-left: 30px;
  @media (max-width: 400px) {
    width: 120px;
  }
`;

export default ThinLine;
