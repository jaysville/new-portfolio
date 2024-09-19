import styled from "styled-components";
import Nav from "./components/layout/Nav";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Works from "./sections/Works";
import Articles from "./sections/Articles";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";
import SideNav from "./components/layout/Sidenav";
import { useState } from "react";

function App() {
  const [openSidenav, setOpenSidenav] = useState(false);

  const toggleSideNav = (newState) => {
    setOpenSidenav(newState);
  };

  return (
    <Style>
      <Nav
        opensidenav={() => {
          toggleSideNav(true);
        }}
      />
      <SideNav
        isopen={openSidenav}
        closesidenav={() => {
          toggleSideNav(false);
        }}
      />
      <Landing />
      <About />
      <Skills />
      <Works />
      <Articles />
      <Contact />
      <Footer />
    </Style>
  );
}

const Style = styled.div`
  background-color: black;
  padding: 10px 50px;
  @media (max-width: 600px) {
    padding: 10px 35px;
  }
`;

export default App;
