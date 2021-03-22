import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const isLoading = false;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App isLoading={isLoading} />
    <h3> Dance with me </h3>
  </React.StrictMode>,
  rootElement
);
