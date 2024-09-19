import styled from "styled-components";
import NAVLINKS from "../../NavLinks";

import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";

const Nav = ({ opensidenav }) => {
  return (
    <Style>
      <div className="logo">
        <CodeIcon />
        <h2>Jaysville</h2>
      </div>
      <ul>
        {NAVLINKS.map(({ title, link }, i) => {
          return (
            <Link>
              <a href={link}>{title}</a>
            </Link>
          );
        })}
      </ul>
      <div className="menu">
        <Menu onClick={opensidenav} />
      </div>
    </Style>
  );
};

export default Nav;

const Style = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div.logo {
    display: flex;

    h2 {
      margin-left: 10px;
    }
    svg {
      transform: translateY(24px) scale(1.5);
      color: #00f7ff;
    }
  }
  ul {
    display: flex;
    /* align-items: center; */
    @media (max-width: 830px) {
      display: none;
    }
  }
  div.menu {
    display: none;
    @media (max-width: 830px) {
      display: grid;
      place-items: center;
    }
  }
`;

const Link = styled.li`
  margin-right: 30px;
  cursor: pointer;
`;

const Menu = styled(MenuIcon)`
  transform: scale(1.5);
  cursor: pointer;
`;
