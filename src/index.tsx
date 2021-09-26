import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./state/store";
import register from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
