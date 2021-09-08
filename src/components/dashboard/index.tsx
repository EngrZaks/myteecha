import { Button } from "antd";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import firebase from "../../firebase";
import { DesktopMenu, MobileMenu } from "./menu";
import Explore from "./explore/explore";
const auth = firebase.auth();
export default function Dashboard({ user }: { user: any }) {
  console.log(user);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Router>
      <div className="dashboard">
        {/* {isMobile ? (
          <MobileMenu user={user} />
        ) : (
          <DesktopMenu user={user} auth={auth} />
        )} */}
      </div>
      <Switch>
        <Route exact path="/explore">
          <Explore user={user} />
        </Route>
      </Switch>
    </Router>
  );
}
