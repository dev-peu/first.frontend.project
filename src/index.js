import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import "./global.css";
import Routes from "./routes/index.routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes />
  </Router>
);
