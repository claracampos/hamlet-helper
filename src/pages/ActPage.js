import React from "react";
import { Link } from "react-router-dom";
import listOfContents from "../text/listOfContents";

const ActPage = props => {
  const act = listOfContents.find(act => act.path === props.path);
  return (
    <div className="bg-yellow p-5 d-flex flex-column align-items-center">
      <h1 className="mb-4 font-italic">{act.title}</h1>
      <div className="d-flex flex-column ">
        {act.scenes.map((item, index) => {
          return (
            <Link
              to={`/${act.path}/scene${index + 1}`}
              className="btn btn-outline-dark text-black font-weight-bold mb-2"
            >
              {item}
            </Link>
          );
        })}
        <Link to="/" className="btn btn-dark align-self-end font-italic mt-4">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default ActPage;
