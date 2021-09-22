import React from "react";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/leg_logo_real_2.png";
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
import firebase from "../../firebase";
const firestore = firebase.firestore();

const LandindPage: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const dispatch = useDispatch();
  const signup = useSelector((state: any) => state.signup);
  console.log(signup);

  const { displaySigUp, displaySignIn } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [subscribeError, setSubscribeError] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const mailRef = firestore.collection("mailing");
  const finish = async (values: any) => {
    setLoading(true);
    try {
      await mailRef.add({ email: values.email }).then(
        () => {
          console.log("subscribed!");
          setSubscribed(true);
          setLoading(false);
          setButtonDisabled(true);
          setSubscribeError("");
        },
        (err) => {
          console.log("failed to subscribe");
          setLoading(false);
          setButtonDisabled(true);
          setSubscribeError(err.message);
        }
      );
    } catch (error) {
      console.log("server down or network error", error);
      setLoading(false);
      setSubscribed(false);
      setSubscribeError("server down or network error");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
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
        {subscribeError && <div>{subscribeError}</div>}

        <Form onFinish={finish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            {subscribed ? (
              <h2>thanks for subscribing 🙏</h2>
            ) : (
              <Input
                placeholder="Your email address"
                style={{ textAlign: "center" }}
              />
            )}
          </Form.Item>
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={buttonDisabled}
          >
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
