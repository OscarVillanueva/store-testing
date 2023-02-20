import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./routes/App";
import reducer from "./reducers";

import initialState from "./initialState";

const store = createStore(reducer, initialState);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
