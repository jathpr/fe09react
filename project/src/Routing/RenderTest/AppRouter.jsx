import { Redirect, Route, Switch } from "react-router-dom";
import { Page } from "./Page";

export const AppRouter = () => (
  <Switch>
    <Route path="/1">
      <Page />
    </Route>
    <Route path="/2" component={Page} />
    <Route path="/3" render={() => <Page />} />
    <Route path="*">
      <Redirect to="/1" />
    </Route>
  </Switch>
);
