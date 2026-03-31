import styled from "styled-components";
import ThinLine from "../components/ui/ThinLine";
import ArticleCard from "../components/ui/ArticleCard";

const Articles = () => {
  return (
    <Style id="articles">
      <div className="heading">
        <h3>Articles</h3>
        <ThinLine />
      </div>
      <div>
        {ArticleLinks.map(({ title, subtext, link, image }, i) => {
          return (
            <a href={link} key={i}>
              <ArticleCard
                title={title}
                subtext={subtext}
                link={link}
                image={image}
              />
            </a>
          );
        })}
      </div>
    </Style>
  );
};

export default Articles;

const Style = styled.section`
  margin-bottom: 80px;
  .heading {
    display: flex;
  }
`;

const ArticleLinks = [
  {
    title: "A Comprehensive Guide to Uploading Images with React and Node.js.",
    subtext: "A step by Step Tutorial.",
    link: "https://medium.com/stackademic/uploading-images-with-react-and-node-js-a-comprehensive-guide-980afda115ba",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eCor6PVI8lQTiI_XXl3xhQ.png",
  },

  {
    title: "React.Js: Data Fetching with Redux Toolkit (RTK) Query.",
    subtext: "A simple way of fetching data from APIs in React",
    link: "https://medium.com/stackademic/react-js-data-fetching-with-redux-toolkit-rtk-query-ad30553df38c",
    image:
      "https://miro.medium.com/v2/resize:fit:786/format:webp/1*IBgZAfuKSmbasFhUJn3YYQ.png",
  },
  {
    title: "Linked Lists in Python: A Beginner’s Guide",
    subtext: "A beginner's guide to understanding linked lists in Python.",
    link: "https://medium.com/stackademic/linked-lists-in-python-a-beginners-guide-65f473b9e0ff",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*PFHbOWNx-rUV1kUEg7mPwQ.jpeg",
  },
  {
    title:
      "React.js Tutorial: How to Build a Simple Rock, Paper, Scissors Game.",
    subtext: "Building game from scratch with React.",
    link: "https://medium.com/stackademic/react-js-tutorial-how-to-build-a-simple-rock-paper-scissors-game-697843823bee",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*FgvFhVApCHGrRhQkcE27Tw.jpeg",
  },
  {
    title: "Understanding Loops in JavaScript.",
    subtext: "A Javascript Tutorial",
    link: "https://medium.com/stackademic/understanding-loops-in-javascript-2635629a7bc5",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*jlVs_bWyqHSsJd7Rxv5EfQ.jpeg",
  },
];
