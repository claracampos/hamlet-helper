import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-yellow">
    <a className="navbar-brand font-weight-bold " href="/">
      H.H.
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Read
          </a>
          <div
            className="dropdown-menu bg-yellow"
            aria-labelledby="navbarDropdown"
          >
            <a className="dropdown-item" href="/act/1">
              Act I
            </a>
            <a className="dropdown-item" href="/act/2">
              Act II
            </a>
            <a className="dropdown-item" href="/act/3">
              Act III
            </a>
            <a className="dropdown-item" href="/act/4">
              Act IV
            </a>
            <a className="dropdown-item" href="/act/5">
              Act V
            </a>
            <a className="dropdown-item" href="/dramatis-personae">
              Dramatis Personae
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
