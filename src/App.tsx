import React from "react";
import ReactDOM from "react-dom";

import "./main/index.css";
import 'toastr/build/toastr.min.js';
import 'toastr/build/toastr.css';
import App from "./main/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById("root")
);
