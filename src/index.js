import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap-grid.css";
import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit";
import "./index.css";
import "tailwindcss/dist/tailwind.css";
import "./assets/fontawesome/css/all.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
