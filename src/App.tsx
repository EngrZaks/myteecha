import "./App.scss";
import Home from "./components/landing";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
function App() {
  const acount = useSelector((state: any) => state.account);
  const dispatch = useDispatch();
  const { depositeMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // console.log(AC);

  return (
    <div className="App">
      <div style={{ margin: "10px auto", width: "300px" }}>
        <h1>{acount}</h1>
        <button onClick={() => depositeMoney(1000)}>deposit</button>
        <button onClick={() => withdrawMoney(1000)}>withdraw</button>
      </div>
      <Home />
    </div>
  );
}

export default App;
