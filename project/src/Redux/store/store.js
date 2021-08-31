import { createStore, combineReducers } from "redux";
import { counter } from "./counter";
import { counter2 } from "./counter2";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({ counter, counter2 }),
  devToolsEnhancer()
);
