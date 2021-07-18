import React from "react";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/logo_transparent.png";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { Button, Form, Input } from "antd";
import { DesktopNav, MobileNav } from "./nav";
import Sections from "./sections";
import Footer from "./footer";
import SignUp from "../signup";
import LogIn from "../signin";

const LandindPage: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const dispatch = useDispatch();
  const signup = useSelector((state: any) => state.signup);
  console.log(signup);

  const { displaySigUp, displaySignIn } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="home">
      {isMobile ? (
        <MobileNav
          logo={logo}
          showSignin={displaySignIn}
          showSignup={displaySigUp}
        />
      ) : (
        <DesktopNav
          logo={logo}
          showSignin={displaySignIn}
          showSignup={displaySigUp}
        />
      )}
      {/* <Router>
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router> */}
      <LogIn />
      <SignUp />
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
          <Button shape="round" type="primary" htmlType="submit">
            Subscribe
          </Button>
          <p>
            By subscribing, you agree to our Terms of Use and Privacy Policy
          </p>
        </Form>
      </section>
      <Footer />
    </div>
  );
};
export default LandindPage;
