import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { Root } from "./Components/Root";

export const App = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
