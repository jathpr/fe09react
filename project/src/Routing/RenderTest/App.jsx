import { Provider } from "./Provider";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";

export const App = () => (
  <BrowserRouter>
    <Provider>
      <AppRouter />
    </Provider>
  </BrowserRouter>
);

// AppRouter can be changed to Main, included AppRouter if part of content should be on every Page
