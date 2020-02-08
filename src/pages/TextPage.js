import React, { useState } from "react";
import getDefinition from "../utils/getDefinition";
import DictionaryDisplay from "../components/DictionaryDisplay";

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
      <DictionaryDisplay dictionary={dictionary} />
    </div>
  );
};

export default TextPage;
