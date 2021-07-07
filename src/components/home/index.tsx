import React from "react";
import "./style.scss";
import useWindowSize from "../../utils/useWindowSize";
import logo from "../../assets/logo_transparent.png";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { DesktopNav, MobileNav } from "./nav";
import Sections from "./sections";
const Home: React.FC = () => {
  return (
    <div className="home">
      {useWindowSize().width > 600 ? (
        <DesktopNav logo={logo} />
      ) : (
        <MobileNav logo={logo} />
      )}
      <Sections />
      <section className="newslater">
        <h2>MyTeecha</h2>
        <p>Want MyTeecha's email newslater?</p>
        <Form>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Subscribe
          </Button>
          <p>
            By subscribing, you agree to our Terms of Use and Privacy Policy
          </p>
        </Form>
      </section>
    </div>
  );
};
export default Home;
