import React from "react";

const TextPage = props => (
  <div className="d-flex flex-column vh-90">
    <div className="main-text-container overflow-auto">
      <h2>{props.title}</h2>
      {props.scene}
    </div>
    <footer className="footer mt-auto dictionary-container overflow-auto">
      test
    </footer>
  </div>
);

export default TextPage;
