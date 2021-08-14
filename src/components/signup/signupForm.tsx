import { useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { BACKEND_URL } from "../constants";

const SignupForm = () => {
  const [Loading, setLoading] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");

  const onFinish = async (values: any) => {
    setErrorMsg("");
    setLoading(true);
    values.role = "student";
    try {
      await axios.post(BACKEND_URL + "/signup", values).then(
        (response) => {
          console.log(response.data);
          setLoading(false);
        },
        (error) => {
          setErrorMsg(error.response.data);
          setLoading(false);
        }
      );
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
        <Button block type="default" style={{ marginTop: "1em" }}>
          <GoogleOutlined
            style={{
              marginRight: "4em",
              color: "#ea4335",
            }}
          />
          Sign Up with Google
        </Button>{" "}
      </Form.Item>
      <Form.Item label={socialLabel}>
        <Button block type="default">
          <FacebookOutlined
            style={{
              marginRight: "3em",
              color: "#4267B2",
            }}
          />{" "}
          Sign Up with Facebook
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignupForm;
