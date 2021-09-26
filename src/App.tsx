import "./App.scss";
import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import Home from "./components/landing";
import logo from "./assets/leg_logo_real_2.png";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Admin from "./components/admin";
import Explore from "./components/dashboard/explore/explore";
import { DesktopMenu, MobileMenu } from "./components/dashboard/menu/menu";
import { useMediaQuery } from "react-responsive";
import Profile from "./components/dashboard/profile/profile";
import Reviews from "./components/dashboard/reviews/reviews";
import Chats from "./components/dashboard/chats";
import Courses from "./components/dashboard/courses";
import { ProfileOutlined } from "@ant-design/icons";
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
  const Header = () => {
    const history = useHistory();
    return (
      <div className="header">
        <img src={logo} alt="myteecha logo" height={50} />
        <div className="userImage" onClick={() => history.replace("/profile")}>
          {user?.photoURL ? (
            <img src={user.photoURL} alt="profile" height={50} />
          ) : (
            <ProfileOutlined />
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="app">
      {user && <Header />}
      <Router>
        <main>
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
            <Route
              path="/explore"
              render={() =>
                user ? <Explore user={user} /> : <Redirect to="/" />
              }
            />
            <Route
              path="/profile"
              render={() =>
                user ? <Profile user={user} auth={auth} /> : <Redirect to="/" />
              }
            />
            <Route
              path="/reviews"
              render={() => (user ? <Reviews /> : <Redirect to="/" />)}
            />
            <Route
              path="/forum"
              render={() => (user ? <Chats /> : <Redirect to="/" />)}
            />
            <Route
              path="/courses"
              render={() => (user ? <Courses /> : <Redirect to="/" />)}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
