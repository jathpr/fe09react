import { Provider } from "react-redux";
import { Change } from "./Change";
import { Display } from "./Display";
import { store } from "./store/oneFileStore";

export const App = () => (
  <Provider store={store}>
    <Display />
    <Change />
  </Provider>
);
