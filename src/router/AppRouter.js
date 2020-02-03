import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
