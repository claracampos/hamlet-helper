import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import listOfContents from "../text/listOfContents";

const ActPage = () => {
  const { act: actNumber } = useParams();
  const act = listOfContents[parseInt(actNumber) - 1];

  return !act ? (
    <Redirect to="/404" />
  ) : (
    <div className="bg-yellow p-5 d-flex flex-column align-items-center">
      <h1 className="mb-4 font-italic">{act.title}</h1>
      <div className="d-flex flex-column ">
        {act.scenes.map((item, index) => {
          return (
            <Link
              to={`/act/${actNumber}/scene/${index + 1}`}
              className="btn btn-outline-dark text-black font-weight-bold mb-2"
              key={`scene${index + 1}`}
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
