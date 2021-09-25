import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./FBStorage/App";
import "./fb";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
