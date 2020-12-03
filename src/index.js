import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import global styles
import "./styles/global.scss";

// import store
import { store } from "./services/store";

import App from "./App";

const DOM_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  DOM_NODE
);
