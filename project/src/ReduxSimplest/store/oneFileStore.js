import { createStore } from "redux";

const reducer = (state = "world") => state;

export const store = createStore(reducer);
