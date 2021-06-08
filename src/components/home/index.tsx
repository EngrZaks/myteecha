import React from "react";
import "./style.scss";
import logo from "../../assets/logo_transparent.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import homeContentes from "../../utils/homeContents";
const Home: React.FC = () => {
  interface section {
    heading: string;
    p: string;
    btnTxt: string;
    img_url: any;
  }
  const Section: React.FC<section> = ({ heading, p, btnTxt, img_url }) => {
    return (
      <section>
        {img_url && <img src={img_url} alt="illustration" width="100%" />}
        <h2>{heading}</h2>
        <p> {p} </p>
        {btnTxt && <Button>{btnTxt}</Button>}
      </section>
    );
    // const sectionsList = () => {

    // }
    // const sections = homeContentes.map((content) => (
    //   <Section
    //     heading={content.heading}
    //     p={content.p}
    //     btnTxt={content.btnTxt}
    //   />
    // ));
  };
  return (
    <div className="home">
      <nav>
        <img src={logo} alt="myteecha logo" />
        <MenuOutlined />
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
      {homeContentes.map((content) => (
        <Section
          heading={content.heading}
          p={content.p}
          btnTxt={content.btnTxt}
          img_url={content.img_url}
        />
      ))}
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
