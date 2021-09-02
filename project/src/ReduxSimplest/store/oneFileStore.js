import { createStore } from "redux";

const initialState = { value: "world" };

const reducer = (state = initialState) => state;

export const store = createStore(reducer);
