import { createStore } from "redux";
import { hello } from "./actionTypes";

const initialState = { value: "world" };

const reducer = (state = initialState, action) => {
  if (action.type === hello) return { value: "Hello world" };
  return state;
};

export const store = createStore(reducer);
