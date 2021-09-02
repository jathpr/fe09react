import { createStore } from "redux";

const initialState = { value: "world" };

const reducer = (state = initialState, action) => {
  if (action.type === "Hello") return { value: "Hello world" };
  return state;
};

export const store = createStore(reducer);
