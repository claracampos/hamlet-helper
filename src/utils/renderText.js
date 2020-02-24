import React from "react";
import listOfContents from "../text/listOfContents";
import { Redirect } from "react-router-dom";

const renderText = (act, scene) => {
  const actIndex = parseInt(act) - 1;
  const sceneIndex = parseInt(scene) - 1;

  return listOfContents[actIndex].components[sceneIndex] ? (
    listOfContents[actIndex].components[sceneIndex]
  ) : (
    <Redirect to="/404" />
  );
};

export default renderText;
