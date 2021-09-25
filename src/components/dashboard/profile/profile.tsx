import { Button } from "antd";
export default function Profile({ user, auth }: { user: any; auth: any }) {
  return (
    <div className="content">
      <div className="profile top">
        <img src={user.photoURL} alt="profile" />
        <h3>hello {user.displayName} </h3>{" "}
        <Button onClick={() => auth.signOut()}>Logout</Button>
      </div>
    </div>
  );
}
