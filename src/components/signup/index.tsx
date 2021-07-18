import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "antd";

import { actionCreators } from "../../state";
import SignupForm from "./signupForm";
const SignUp = () => {
  // const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const signup = useSelector((state: any) => state.signup);
  const { closeSigUp } = bindActionCreators(actionCreators, dispatch);

  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("");

  const handleOk = () => {
    setModalText("Redirecting to your dashboard...");
    setConfirmLoading(true);
    setTimeout(() => {
      // setVisible(false);
      closeSigUp();
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    // setVisible(false);
    closeSigUp();
  };

  return (
    <>
      <Modal
        visible={signup}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ textAlign: "center", margin: "2em" }}>
          <h1 style={{ fontWeight: "bold" }}>Sign Up</h1>
          <p>Learn better through a wide variety of educational programs.</p>
        </div>
        <SignupForm />
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default SignUp;
