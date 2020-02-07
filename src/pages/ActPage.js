import React from "react";
import { Link } from "react-router-dom";
import listOfContents from "../text/listOfContents";

const ActPage = props => {
  const act = listOfContents.find(act => act.path === props.path);
  return (
    <div>
      <h1>{act.title}</h1>
      <div>
        {act.scenes.map((item, index) => {
          return <Link to={`/${act.path}/scene${index + 1}`}>{item}</Link>;
        })}
      </div>
    </div>
  );
};

export default ActPage;
