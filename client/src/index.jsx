import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

import "bulma/css/bulma.min.css";
import "../public/css/menuBurger.css";
import { FontStyles } from "./components/globals/fonts/fonts.style";

ReactDOM.render(
  <div>
    <FontStyles />
    <App />
  </div>,
  document.getElementById("app")
);
