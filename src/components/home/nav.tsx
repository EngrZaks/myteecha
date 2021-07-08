import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "antd/dist/antd.css";

import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const { SubMenu } = Menu;
export const MobileNav: React.FC<{ logo: any }> = ({ logo }) => {
  // const windowWidth = useWindowSize().width;
  return (
    <nav>
      <Menu
        className="menu"
        style={{ width: "100%", padding: 5, zIndex: 1 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <div className="logo">
          <img src={logo} alt="myteecha logo" />
        </div>
        {/* <MenuOutlined /> */}
        <Router>
          <SubMenu key="sub1" icon={<MenuOutlined />} title="">
            <Menu.Item key="1">
              <Link to="explore">Explore</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="for-student">For Student</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="login">Log in</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="signup">Sign Up</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="contact">Contact Us</Link>
            </Menu.Item>
          </SubMenu>
        </Router>
      </Menu>
    </nav>
  );
};

export const DesktopNav: React.FC<{ logo: any }> = ({ logo }) => {
  return (
    <nav className="desktop-nav">
      <div className="logo">
        <img src={logo} alt="myteecha logo" />
      </div>
      {/* <MenuOutlined /> */}
      <Router>
        <ul>
          <li>
            <Link to="explore">Explore</Link>
          </li>
          <li>
            <Link to="for-student">For Student</Link>
          </li>
          <li>
            <Link to="login">Log in</Link>
          </li>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>
      </Router>
    </nav>
  );
};
