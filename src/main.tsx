import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import './index.css'

import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; //#import the App.css here is enough

//import "mdb-react-ui-kit/dist/css/mdb.min.css"; //for mdb //#hv conflict with the regular bootstrap

import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
