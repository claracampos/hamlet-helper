import React from "react";

const TextPage = props => (
  <div>
    <div>
      <h2>{props.title}</h2>
      {props.scene}
    </div>
  </div>
);

export default TextPage;
