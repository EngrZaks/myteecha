import React from "react";
import { Menu, Button } from "antd";
import "../style.scss";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  ProfileOutlined,
  CreditCardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { MdForum } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineSearchCircle } from "react-icons/hi";
import upgrade from "../../../assets/upgrade.png";
import upgradeM from "../../../assets/upgradeM.png";
const { SubMenu } = Menu;

export function DesktopMenu({ user, auth }: { user: any; auth: any }) {
  const [collapsed, setCollapssed] = React.useState(false);
  const [Upgrade, setUpgrade] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapssed(!collapsed);
    setUpgrade(!Upgrade);
  };
  return (
    <Router>
      <div className="DesktopMenu" style={{ width: 256 }}>
        <Button
          type="default"
          onClick={toggleCollapsed}
          style={{ marginBottom: 0, width: 80 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <Menu
          className="menu"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<HiOutlineSearchCircle />}>
            <NavLink to="/explore">Explore</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<BsBook />}>
            <NavLink to="/courses">Courses</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<MdForum />}>
            <NavLink activeClassName="active" to="/forum">
              Forum
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<AiOutlineStar />}>
            <NavLink activeClassName="active" to="/reviews">
              Reviews
            </NavLink>
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={
              user.photoUrl ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <UserOutlined />
              )
            }
            title={user.displayName}
          >
            <Menu.Item key="5" icon={<ProfileOutlined />}>
              <NavLink activeClassName="active" to="/profile">
                Profile
              </NavLink>
            </Menu.Item>
            <Menu.Item key="7" icon={<CreditCardOutlined />}>
              <NavLink activeClassName="active" to="/subsciption">
                Subsciption
              </NavLink>
            </Menu.Item>
            <Menu.Item key="8" icon={<QuestionCircleOutlined />}>
              <NavLink activeClassName="active" to="/evaluation">
                Evaluation
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<LogoutOutlined />}
              onClick={() => auth.signOut()}
            >
              Logout
            </Menu.Item>
          </SubMenu>
        </Menu>
        <div className="upgrade">
          <img src={Upgrade ? upgradeM : upgrade} alt="upgrade plan" />
        </div>
      </div>
    </Router>
  );
}

export const MobileMenu = ({ user }: { user: any }) => {
  return (
    <div className="MobileMenu">
      <div className="menu">
        <NavLink activeClassName="active" to="/explore">
          <HiOutlineSearchCircle />{" "}
        </NavLink>
        <NavLink activeClassName="active" to="/courses">
          <BsBook />{" "}
        </NavLink>
        <NavLink activeClassName="active" to="/forum">
          <MdForum />{" "}
        </NavLink>
        <NavLink activeClassName="active" to="/reviews">
          <AiOutlineStar />{" "}
        </NavLink>
        <NavLink activeClassName="active" to="/profile">
          {user.photoUrl ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <UserOutlined />
          )}
        </NavLink>
      </div>
    </div>
  );
};
