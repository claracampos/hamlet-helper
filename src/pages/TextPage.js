import React, { useState } from "react";
import { useParams } from "react-router-dom";
import getDefinition from "../utils/getDefinition";
import renderText from "../utils/renderText";
import DictionaryDisplay from "../components/DictionaryDisplay";

const TextPage = () => {
  const { act, scene } = useParams();

  const [dictionary, setDictionary] = useState({
    word: "",
    definition: "",
    error: false
  });

  return (
    <div className="d-flex flex-column">
      <div className="overflow-auto text-container bg-white">
        <div className="bg-yellow p-2 small-text text-center">
          <p>
            <i>
              Click on a word to display its meaning below.
              <br />
              (This feature does not apply to scene titles and dialogue cues.)
            </i>
          </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div
            onTouchStart={e => {
              getDefinition(e, setDictionary);
            }}
            onClick={e => {
              getDefinition(e, setDictionary);
            }}
            className="text-width p-3"
          >
            {renderText(act, scene)}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <DictionaryDisplay dictionary={dictionary} />
      </div>
    </div>
  );
};

export default TextPage;
