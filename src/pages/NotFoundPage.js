import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="p-5 d-flex flex-column justify-content-center align-items-center">
    <h1 className="display-2">404</h1>
    <p className="lead">The page you requested could not be found.</p>
    <Link to="/" className="btn btn-light mt-4">
      Go home
    </Link>
  </div>
);

export default NotFoundPage;
