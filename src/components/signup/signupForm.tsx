import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

import { Form, Input, Button } from "antd";
import firebase from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
const auth = firebase.auth();
// const firestore = firebase.firestore();
const SignupForm = () => {
  const [Loading, setLoading] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const authWith = (service?: string) => (event: any) => {
    const provider =
      service === "google"
        ? new firebase.auth.GoogleAuthProvider()
        : new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider);
  };
  const onFinish = async (values: any) => {
    setErrorMsg("");
    setLoading(true);
    values.role = "student";
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((userCredential) => {
          console.log(userCredential.user);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.code, error.message);
          setErrorMsg(error.message);
          setLoading(false);
        });
    } catch (error) {
      setErrorMsg("server temporarily down 😢 please try again later 🙏");
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    setLoading(false);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const socialLabel = isMobile ? "" : ".";
  return (
    <Form
      name="signup"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="FULL NAME"
        name="fullname"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="EMAIL"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="PASSWORD"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      {ErrorMsg && (
        <div
          className="error"
          style={{
            color: "red",
            textAlign: "center",
            border: "2px solid #e3e3e3",
            margin: "5px auto",
            padding: 5,
            fontWeight: "bold",
          }}
        >
          {ErrorMsg}
        </div>
      )}
      <Form.Item label={socialLabel}>
        <Button loading={Loading} block type="primary" htmlType="submit">
          Join for Free
        </Button>
      </Form.Item>

      <Form.Item label={socialLabel}>
        <Button
          onClick={authWith("google")}
          block
          type="default"
          style={{ marginTop: "1em" }}
        >
          <FcGoogle
            style={{
              marginRight: "4em",
              color: "#ea4335",
            }}
          />
          Continue with Google
        </Button>{" "}
      </Form.Item>
      <Form.Item label={socialLabel}>
        <Button onClick={authWith("facebook")} block type="default">
          <GrFacebook
            style={{
              marginRight: "3em",
              color: "#4267B2",
            }}
          />{" "}
          Continue with Facebook
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignupForm;
