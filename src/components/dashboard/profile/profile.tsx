import { Button } from "antd";
import React from "react";

export default function Profile({ user, auth }: { user: any; auth: any }) {
  return (
    <div>
      <h3>hello {user.displayName}</h3>
      <Button onClick={() => auth.signOut()}>Logout</Button>
    </div>
  );
}
