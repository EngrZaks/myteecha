import React from "react";

export default function Explore({ user }: { user: any }) {
  return (
    <div>
      <h1>Explore all of MyTeecha</h1>
      <p>hello welcome </p>
      {user.displayName}
    </div>
  );
}
