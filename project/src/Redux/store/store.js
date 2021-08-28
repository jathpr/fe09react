import { createStore } from "redux";
import { counter } from "./counter";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(counter, devToolsEnhancer());
