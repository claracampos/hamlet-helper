import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DramatisPersonaePage from "../pages/DramatisPersonaePage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import TextPage from "../pages/TextPage";
import ActPage from "../pages/ActPage";
import Act1Scene1 from "../text/act1/Act1Scene1";
import Act1Scene2 from "../text/act1/Act1Scene2";
import Act1Scene3 from "../text/act1/Act1Scene3";
import Act1Scene4 from "../text/act1/Act1Scene4";
import Act1Scene5 from "../text/act1/Act1Scene5";
import Act2Scene1 from "../text/act2/Act2Scene1";
import Act2Scene2 from "../text/act2/Act2Scene2";
import Act3Scene1 from "../text/act3/Act3Scene1";
import Act3Scene2 from "../text/act3/Act3Scene2";
import Act3Scene3 from "../text/act3/Act3Scene3";
import Act3Scene4 from "../text/act3/Act3Scene4";
import Act4Scene1 from "../text/act4/Act4Scene1";
import Act4Scene2 from "../text/act4/Act4Scene2";
import Act4Scene3 from "../text/act4/Act4Scene3";
import Act4Scene4 from "../text/act4/Act4Scene4";
import Act4Scene5 from "../text/act4/Act4Scene5";
import Act4Scene6 from "../text/act4/Act4Scene6";
import Act4Scene7 from "../text/act4/Act4Scene7";
import Act5Scene1 from "../text/act5/Act5Scene1";
import Act5Scene2 from "../text/act5/Act5Scene2";

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
      <Route exact path="/act1/">
        <ActPage path="act1" />
      </Route>
      <Route exact path="/act2/">
        <ActPage path="act2" />
      </Route>
      <Route exact path="/act3/">
        <ActPage path="act3" />
      </Route>
      <Route exact path="/act4/">
        <ActPage path="act4" />
      </Route>
      <Route exact path="/act5/">
        <ActPage path="act5" />
      </Route>
      <Route exact path="/act1/scene1">
        <TextPage scene={<Act1Scene1 />} />
      </Route>
      <Route exact path="/act1/scene2">
        <TextPage scene={<Act1Scene2 />} />
      </Route>
      <Route exact path="/act1/scene3">
        <TextPage scene={<Act1Scene3 />} />
      </Route>
      <Route exact path="/act1/scene4">
        <TextPage scene={<Act1Scene4 />} />
      </Route>
      <Route exact path="/act1/scene5">
        <TextPage scene={<Act1Scene5 />} />
      </Route>
      <Route exact path="/act2/scene1">
        <TextPage scene={<Act2Scene1 />} />
      </Route>
      <Route exact path="/act2/scene2">
        <TextPage scene={<Act2Scene2 />} />
      </Route>
      <Route exact path="/act3/scene1">
        <TextPage scene={<Act3Scene1 />} />
      </Route>
      <Route exact path="/act3/scene2">
        <TextPage scene={<Act3Scene2 />} />
      </Route>
      <Route exact path="/act3/scene3">
        <TextPage scene={<Act3Scene3 />} />
      </Route>
      <Route exact path="/act3/scene4">
        <TextPage scene={<Act3Scene4 />} />
      </Route>
      <Route exact path="/act4/scene1">
        <TextPage scene={<Act4Scene1 />} />
      </Route>
      <Route exact path="/act4/scene2">
        <TextPage scene={<Act4Scene2 />} />
      </Route>
      <Route exact path="/act4/scene3">
        <TextPage scene={<Act4Scene3 />} />
      </Route>
      <Route exact path="/act4/scene4">
        <TextPage scene={<Act4Scene4 />} />
      </Route>
      <Route exact path="/act4/scene5">
        <TextPage scene={<Act4Scene5 />} />
      </Route>
      <Route exact path="/act4/scene6">
        <TextPage scene={<Act4Scene6 />} />
      </Route>
      <Route exact path="/act4/scene7">
        <TextPage scene={<Act4Scene7 />} />
      </Route>
      <Route exact path="/act5/scene1">
        <TextPage scene={<Act5Scene1 />} />
      </Route>
      <Route exact path="/act5/scene2">
        <TextPage scene={<Act5Scene2 />} />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
