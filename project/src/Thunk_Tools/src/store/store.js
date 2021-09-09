import thunk from "redux-thunk";
import { todos } from "./todosReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: todos,
  middleware: [thunk],
});
