import styled from "styled-components";
import NAVLINKS from "../../NavLinks";
import { Drawer } from "antd";

const SideNav = ({ isopen, closesidenav }) => {
  return (
    <SideDrawer
      open={isopen}
      onClose={closesidenav}
      style={{ backgroundColor: "black" }}
      className="side-navigation"
    >
      <Style>
        {NAVLINKS.map(({ title, link }, i) => {
          return (
            <a href={link} key={i} onClick={closesidenav}>
              <span>{title}</span>
            </a>
          );
        })}
      </Style>
    </SideDrawer>
  );
};

export default SideNav;

const Style = styled.div`
  background-color: black;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin: 10px 0;
  }
`;

const SideDrawer = styled(Drawer)`
  .ant-drawer-close {
    svg {
      color: #00f7ff;
    }
  }
`;
