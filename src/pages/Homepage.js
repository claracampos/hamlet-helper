import React, { useState } from "react";
import will from "../media/will.jpg";
import skull from "../media/skull.jpg";
import TableOfContents from "../components/TableOfContents";

const Homepage = () => {
  const [showDefiniton, setShowDefinition] = useState(false);

  return (
    <div className="d-flex flex-column text-center justify-content-center bg-yellow px-3">
      <div className="text-center">
        <img
          className="main-image"
          src={will}
          alt='William Shakespeare with sunglasses on and the words "Hamlet Helper" overlaid.'
        />
      </div>
      <div className="mt-3">
        <h2>
          Shakespeare's <i>Hamlet</i> with an embedded dictionary.
        </h2>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <p className="align-self-center text-justify">
          No idea what good old Will was saying? No problem!
          <b> Click the word and the definition will appear.</b>
        </p>
        <p className="align-self-center text-justify my-2">
          (Now you can actually read <i>Hamlet</i> instead of watching the movie
          and pretending that you did.)
        </p>
      </div>
      <div className="text-center my-4 d-flex flex-row flex-wrap justify-content-center">
        <img
          className="skull-image m-3"
          src={skull}
          alt="Illustration of a human skull with an asterisk next to it"
          onClick={() => setShowDefinition(!showDefiniton)}
        />
        {showDefiniton && (
          <div className="skull-definition text-justify text-white p-3 shadow">
            <p className="h4">skull</p>
            <p>
              <i>noun:</i> the skeleton of the head of a vertebrate forming a
              bony or cartilaginous case that encloses and protects the brain
              and chief sense organs and supports the jaws.
              <br />
              <i>verb:</i> to hit on the head.
            </p>
            <a
              href="https://www.merriam-webster.com/dictionary/skull"
              target="blank"
              className="btn btn-primary py-0 btn-sm"
            >
              View More
            </a>
          </div>
        )}
      </div>
      <TableOfContents />
    </div>
  );
};

export default Homepage;
