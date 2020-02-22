import React from "react";
import photo from "../media/photo.jpg";
import what from "../media/what.jpg";
import how from "../media/how.jpg";
import who from "../media/who.jpg";
import why from "../media/why.jpg";

const AboutPage = () => (
  <div className="d-flex flex-column w-100 align-items-center text-justify px-3 mb-5">
    <div className="about">
      <h1 className="text-center font-italic">About</h1>
      <img
        src={what}
        alt='Tilted pink rectangle with the word "What" inside it'
        className="about-heading"
      />
      <p>
        <i>The Tragedy of Hamlet, Prince of Denmark</i> is the William
        Shakespeare's longest play. It consists of over 30,000 words, some of
        which are utterly confusing.
      </p>
      <img
        src={how}
        alt='Tilted pink rectangle with the word "How" inside it'
        className="about-heading"
      />
      <p>
        <b>Hamlet Helper</b> uses the Merriam-Webster's Collegiate® Dictionary
        API to provide brief definitions of the words in Shakespeare's{" "}
        <i>Hamlet</i>. Every time a word from the text is clicked, a request is
        sent to the API, which sends back data as a response. This data is then
        processed and rendered to the user, who has the option to click a "View
        More" button to visit the corresponding dictionary entry on
        Merriam-Webster's website.
      </p>
      <img
        src={why}
        alt='Tilted pink rectangle with the word "Why" inside it'
        className="about-heading"
      />
      <p>
        Because reading Shakespeare should be a pleasant experience, not
        necessarily a laborious one.
      </p>
      <img
        src={who}
        alt='Tilted pink rectangle with the word "Who" inside it'
        className="about-heading"
      />
      <p>
        This web-application was developed by Clara Campos, who had to read{" "}
        <i>Hamlet</i> for an Introduction to Literature course at university and
        loved it.
      </p>
      <div className="d-flex flex-column align-items-center my-4">
        <img className="rounded-circle photo" src={photo} alt="Clara Campos" />
        <p className="font-weight-bold m-0">Clara Campos</p>
        <p className="font-weight-light m-0">Prince Edward Island, Canada</p>
        <p>
          <a
            href="https://github.com/claracampos"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1"
          >
            GitHub
          </a>
          |
          <a
            href="https://claralearnstocode.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1 ml-1"
          >
            Blog
          </a>
          |
          <a
            href="https://claracampos.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            Website
          </a>
        </p>
      </div>
      <p className="text-center small-text">
        (Source:{" "}
        <a
          href="https://www.gutenberg.org/files/1524/1524-h/1524-h.htm"
          target="blank"
        >
          Hamlet by William Shakespeare, at Project Gutemberg
        </a>
        )
      </p>
    </div>
  </div>
);

export default AboutPage;
