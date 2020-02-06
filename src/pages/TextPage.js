import React, { useState } from "react";
import getDefinition from "../utils/getDefinition";

const TextPage = props => {
  const [dictionary, setDictionary] = useState({
    word: "",
    definition: ""
  });

  return (
    <div className="d-flex flex-column vh-100">
      <div className="overflow-auto h-50 p-2">
        <div
          onTouchStart={e => {
            getDefinition(e, setDictionary);
          }}
          onClick={e => {
            getDefinition(e, setDictionary);
          }}
        >
          {props.scene}
        </div>
      </div>
      <footer className="footer mt-auto h-50 overflow-auto bg-light p-2">
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
