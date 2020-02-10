import React from "react";

const DictionaryDisplay = props => {
  const { word, definition } = props.dictionary;

  if (word === "error") {
    return (
      <footer className="footer mt-auto overflow-auto bg-yellow p-3">
        <p>
          <b>Oh no!</b> We couldn't find a definition for that word.
        </p>
        <a
          href={`https://www.merriam-webster.com/`}
          target="blank"
          className="text-danger"
        >
          Go to Merriam Webster?
        </a>
      </footer>
    );
  }

  return (
    <footer className="footer mt-auto overflow-auto bg-yellow p-3">
      {word && <p className="font-weight-bold">{word}</p>}
      {definition && (
        <div>
          <ul className="mb-2">
            {definition.map((item, index) => (
              <li key={`${word}${index}`}>{item}</li>
            ))}
          </ul>
          <a
            href={`https://www.merriam-webster.com/dictionary/${word}`}
            target="blank"
            className="btn btn-primary py-0 btn-sm"
          >
            View more
          </a>
        </div>
      )}
    </footer>
  );
};

export default DictionaryDisplay;
