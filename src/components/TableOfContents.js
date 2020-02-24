import React from "react";
import { Link } from "react-router-dom";
import listOfContents from "../text/listOfContents";

const TableofContents = () => (
  <div className="d-flex flex-column mt-3 mb-5 py-2 px-4  border border-dark rounded align-self-center table-contents">
    <p className="h3 text-monospace font-weight-bold">Table of Contents</p>
    <Link
      to="/dramatis-personae"
      className="btn btn-outline-dark text-black font-weight-bold mb-2 w-100"
    >
      Dramatis Personae
    </Link>
    {listOfContents.map((act, actIndex) => (
      <div className="dropdown" key={act.path}>
        <button
          className="btn btn-outline-dark text-black font-weight-bold mb-2 dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {act.title}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {act.scenes.map((scene, sceneIndex) => (
            <Link
              to={`/act/${actIndex + 1}/scene/${sceneIndex + 1}`}
              className="dropdown-item"
              key={`scene${sceneIndex + 1}`}
            >{`Scene ${sceneIndex + 1}`}</Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default TableofContents;
