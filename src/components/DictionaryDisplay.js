import React from "react";

const DictionaryDisplay = props => {
  const { word, definition } = props.dictionary;

  if (word === "error") {
    return (
      <footer className="footer mt-auto h-50 overflow-auto bg-light p-2">
        <p>
          <b>Oh no!</b> We couldn't find a definition for the selected text. Try
          adjusting your selection.
        </p>
        <a href={`https://www.merriam-webster.com/`} target="blank">
          Go to Merriam Webster?
        </a>
      </footer>
    );
  }

  return (
    <footer className="footer mt-auto h-50 overflow-auto bg-light p-2">
      {word && <p className="font-weight-bold">{word}</p>}
      {definition && (
        <div>
          <ul>
            {definition.map((item, index) => (
              <li key={`${word}${index}`}>{item}</li>
            ))}
          </ul>
          <a
            href={`https://www.merriam-webster.com/dictionary/${word}`}
            target="blank"
          >
            View more
          </a>
        </div>
      )}
    </footer>
  );
};

export default DictionaryDisplay;
