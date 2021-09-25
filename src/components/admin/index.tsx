import { Button, Form, Input, Skeleton } from "antd";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import firebase from "../../firebase";
import Course from "./courses";
import "./style.scss";
import { useCollectionData } from "react-firebase-hooks/firestore";
const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Admin() {
  // const [adminPass, setAdminPass] = React.useState([]);
  const adminRef = firestore.collection("admin");
  console.log(adminRef);
  const [adminPasswords] = useCollectionData(adminRef);
  // adminPasswords?.forEach((element) => {
  //   adminPass.push(element);
  // });
  // console.log("passwords", adminPass[0]);
  console.log(adminPasswords ? adminPasswords[0] : "no available");

  const [Password, SetPassword] = React.useState("");
  const passwordState = (e: any) => {
    e.preventDefault();
    SetPassword(e.target.value);
  };
  const [user] = useAuthState(auth);
  const AdminDashboard = ({ user }: { user: any }) => {
    return (
      <div className="admin-dash">
        <div className="profile">
          <div className="name">{user.displayName}</div>
          <div className="image">
            <img src={user.photoURL} alt={user?.displayName} />
          </div>
        </div>
        <Course />
      </div>
    );
  };
  const SignIn = () => {
    const sigin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
    return (
      <div className="signin">
        <Button onClick={sigin} type="default" style={{ marginTop: "3em" }}>
          <FcGoogle
            style={{
              marginRight: "4em",
              color: "#ea4335",
            }}
          />
          Continue with Google
        </Button>{" "}
      </div>
    );
  };
  return adminPasswords ? (
    <div>
      {Password === adminPasswords[0].aroPass ||
      Password === adminPasswords[0].jamiuPass ? (
        <div className="admin">
          <h1>hello {Password.split(" ")[0]}</h1>
          {user ? <AdminDashboard user={user} /> : <SignIn />}
        </div>
      ) : (
        <div className="admin-login">
          <Form>
            <Form.Item
              label="PASSWORD"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password onChange={passwordState} />
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  ) : (
    <Skeleton />
  );
}
