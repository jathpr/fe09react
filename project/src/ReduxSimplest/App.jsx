import { Provider } from "react-redux";
import { Display } from "./Display";
import { store } from "./store/oneFileStore";

export const App = () => (
  <Provider store={store}>
    <Display />
  </Provider>
);
