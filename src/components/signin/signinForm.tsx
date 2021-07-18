import { useMediaQuery } from "react-responsive";

import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";

const SigninForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        label="EMAIL"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="PASSWORD"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label={socialLabel}>
        <Button block type="primary" htmlType="submit">
          Log in
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
          Continue with Google
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
          Continue with Facebook
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SigninForm;
