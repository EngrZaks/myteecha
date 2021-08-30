import { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import { BACKEND_URL } from "../constants";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
const SigninForm = () => {
  const [Loading, setLoading] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const onFinish = async (values: any) => {
    setErrorMsg("");
    setLoading(true);
    try {
      await axios.post(BACKEND_URL + "/login", values).then(
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
      name="signin"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
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
      <Form.Item label={socialLabel}>
        <Button loading={Loading} block type="primary" htmlType="submit">
          Log in
        </Button>
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
        <Button block type="default" style={{ marginTop: "1em" }}>
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
        <Button block type="default">
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
export default SigninForm;
