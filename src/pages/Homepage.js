import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div>
    <h1>Hamlet Helper</h1>
    <h2>Description here</h2>
    <p>Dramatis Personae</p>
    <p>ACT I</p>
    <Link to="/act1/scene1">
      Scene I. Elsinore. A platform before the Castle.
    </Link>
    <Link to="/act1/scene2">
      Scene II. Elsinore. A room of state in the Castle
    </Link>
    <Link to="/act1/scene3">Scene III. A room in Polonius’s house.</Link>
    <Link to="/act1/scene4">Scene IV. The platform.</Link>
    <Link to="/act1/scene5">Scene V. A more remote part of the Castle.</Link>
    <p>ACT II</p>
    <Link to="/act2/scene1">Scene I. A room in Polonius’s house.</Link>
    <Link to="/act2/scene2">Scene II. A room in the Castle.</Link>
    <p>ACT III</p>
    <Link to="/act3/scene1">Scene I. A room in the Castle.</Link>
    <Link to="/act3/scene2">Scene II. A hall in the Castle.</Link>
    <Link to="/act3/scene3">Scene III. A room in the Castle.</Link>
    <Link to="/act3/scene4">Scene IV. Another room in the Castle.</Link>
    <p>ACT IV</p>
    <Link to="/act4/scene1">Scene I. A room in the Castle.</Link>
    <Link to="/act4/scene2">Scene II. Another room in the Castle.</Link>
    <Link to="/act4/scene3">Scene III. Another room in the Castle.</Link>
    <Link to="/act4/scene4">Scene IV. A plain in Denmark.</Link>
    <Link to="/act4/scene5">Scene V. Elsinore. A room in the Castle.</Link>
    <Link to="/act4/scene6">Scene VI. Another room in the Castle.</Link>
    <Link to="/act4/scene7">Scene VII. Another room in the Castle.</Link>
    <p>ACT V</p>
    <Link to="/act5/scene1">Scene I. A churchyard.</Link>
    <Link to="/act5/scene2">Scene II. A hall in the Castle.</Link>
  </div>
);

export default Homepage;
