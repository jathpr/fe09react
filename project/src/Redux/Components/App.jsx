import React from "react";
import { Second } from "./Second";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Increment } from "./Increment";
import { Show } from "./ShowValue";
import { First } from "./First";

export const App = () => (
  <Provider store={store}>
    <First />
    <Second />
    <Show />
    <Increment />
  </Provider>
);
