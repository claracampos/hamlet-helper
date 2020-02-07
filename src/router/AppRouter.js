import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PlayRoutes from "./PlayRoutes";
import DramatisPersonaePage from "../pages/DramatisPersonaePage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/dramatis-personae">
        <DramatisPersonaePage />
      </Route>
      <PlayRoutes />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
