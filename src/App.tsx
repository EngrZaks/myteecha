import "./App.scss";
import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import Home from "./components/landing";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Admin from "./components/admin";
import Explore from "./components/dashboard/explore/explore";
import { DesktopMenu, MobileMenu } from "./components/dashboard/menu";
import { useMediaQuery } from "react-responsive";
import Profile from "./components/dashboard/profile/profile";
// import { Skeleton } from "antd";
const auth = firebase.auth();
// firebase.analytics();
function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const [user] = useAuthState(auth);

  const Menu = () => {
    return (
      <div>
        {isMobile ? (
          <MobileMenu user={user} />
        ) : (
          <DesktopMenu user={user} auth={auth} />
        )}
      </div>
    );
  };
  return (
    <Router>
      {user ? <Menu /> : ""}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (user ? <Redirect to="/explore" /> : <Home />)}
        />
        {/* <AppComponent /> */}

        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/explore">
          {user ? <Explore user={user} /> : <Home />}
        </Route>
        <Route path="/profile">
          {user ? <Profile user={user} auth={auth} /> : <Home />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
