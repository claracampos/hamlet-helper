import React, { useState } from "react";
import getDefinition from "../utils/getDefinition";

const TextPage = props => {
  const [dictionary, setDictionary] = useState({
    word: "",
    definition: ""
  });

  return (
    <div className="d-flex flex-column vh-100">
      <div className="main-text-container overflow-auto">
        <h2>{props.title}</h2>
        <div
          onClick={e => {
            getDefinition(e, setDictionary);
          }}
        >
          {props.scene}
        </div>
      </div>
      <footer className="footer mt-auto dictionary-container overflow-auto bg-warning">
        <p>{dictionary.definition}</p>
        {dictionary.definition && (
          <a
            href={`https://www.merriam-webster.com/dictionary/${dictionary.word}`}
            target="blank"
          >
            View more
          </a>
        )}
      </footer>
    </div>
  );
};

export default TextPage;
