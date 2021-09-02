import { Provider } from "react-redux";
import { Display } from "./Display";

import { createStore } from "redux";

const store = createStore(() => "world");

export const App = () => (
  <Provider store={store}>
    <Display />
  </Provider>
);
