import React from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import SigninForm from "./signinForm";
const SignIn = () => {
  // const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const signin = useSelector((state: any) => state.signin);
  const { displaySignIn, closeSignIn } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      // setVisible(false);
      closeSignIn();
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    // setVisible(false);
    closeSignIn();
  };

  return (
    <>
      <Modal
        visible={signin}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ textAlign: "center", margin: "2em" }}>
          <h1 style={{ fontWeight: "bold" }}>Welcome Back</h1>
        </div>
        <SigninForm />
      </Modal>
    </>
  );
};

export default SignIn;
