import React, { useState } from "react";
import getDefinition from "../utils/getDefinition";
import DictionaryDisplay from "../components/DictionaryDisplay";

const TextPage = props => {
  const [dictionary, setDictionary] = useState({
    word: "",
    definition: ""
  });

  return (
    <div className="d-flex flex-column">
      <div className="overflow-auto text-container bg-white">
        <div className="bg-yellow p-2 small-text text-center">
          <p>
            <i>
              Click on a word to display its meaning below.
              <br />
              (This feature does not apply to scene titles and character cues.)
            </i>
          </p>
        </div>
        <div
          onTouchStart={e => {
            getDefinition(e, setDictionary);
          }}
          onClick={e => {
            getDefinition(e, setDictionary);
          }}
          className="max-480 p-3"
        >
          {props.scene}
        </div>
      </div>
      <DictionaryDisplay dictionary={dictionary} />
    </div>
  );
};

export default TextPage;
