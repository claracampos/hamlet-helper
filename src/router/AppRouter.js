import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DramatisPersonaePage from "../pages/DramatisPersonaePage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import TextPage from "../pages/TextPage";
import ActPage from "../pages/ActPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/dramatis-personae">
        <DramatisPersonaePage />
      </Route>
      <Route exact path="/act/:act">
        <ActPage />
      </Route>
      <Route exact path="/act/:act/scene/:scene">
        <TextPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
