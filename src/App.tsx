import "./App.scss";
import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import Home from "./components/landing";
import Dashboard from "./components/dashboard";
import {
  Route,
  HashRouter,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Admin from "./components/admin";
import Explore from "./components/dashboard/explore/explore";
const auth = firebase.auth();
// firebase.analytics();
function App() {
  const [user] = useAuthState(auth);
  const AppComponent = () => (
    <div className="App">{user ? <Dashboard user={user} /> : <Home />}</div>
  );
  const Go = () => {
    return <h1>hello world let's go there</h1>;
  };
  return (
    <Router>
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
