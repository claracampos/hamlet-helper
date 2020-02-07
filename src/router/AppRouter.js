import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PlayRoutes from "./PlayRoutes";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <PlayRoutes />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
