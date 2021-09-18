import "./App.scss";
import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import Home from "./components/landing";
import Dashboard from "./components/dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Admin from "./components/admin";
import Explore from "./components/dashboard/explore/explore";
import { DesktopMenu, MobileMenu } from "./components/dashboard/menu";
import { useMediaQuery } from "react-responsive";
// import { Skeleton } from "antd";
const auth = firebase.auth();
// firebase.analytics();
function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const [user] = useAuthState(auth);
  const AppComponent = () => (
    <div className="App">{user ? <Dashboard user={user} /> : <Home />}</div>
  );
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
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/explore">
          <Explore user={user} />
        </Route>
        <Route exact path="/">
          <AppComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
