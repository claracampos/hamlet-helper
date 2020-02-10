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
      <div className="overflow-auto text-container bg-white p-3">
        <div
          onTouchStart={e => {
            getDefinition(e, setDictionary);
          }}
          onClick={e => {
            getDefinition(e, setDictionary);
          }}
          className="max-480"
        >
          {props.scene}
        </div>
      </div>
      <DictionaryDisplay dictionary={dictionary} />
    </div>
  );
};

export default TextPage;
