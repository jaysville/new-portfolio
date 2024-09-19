import styled from "styled-components";

const ArticleCard = ({ title, subtext, link, image }) => {
  return (
    <Style>
      <div className="img-container">
        <img src={image} />
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{subtext}</p>
      </div>
    </Style>
  );
};

export default ArticleCard;

const Style = styled.section`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-bottom: 20px;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    margin-right: 30px;
    transform: translateY(-10px);
    @media (max-width: 450px) {
      margin-left: 10px;
    }
  }
  P {
    color: #bbc6e8;
    transform: translateY(-10px);
    font-size: 14px;
  }

  .img-container {
    display: grid;
    place-items: center;
  }
`;
