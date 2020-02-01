import axios from "axios";
import getTopSynonyms from "./getTopSynonyms";

const logSynonym = async e => {
  const word = e.target.innerText.toLowerCase();
  try {
    const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.REACT_APP_KEY}
      `);
    getTopSynonyms(response);
  } catch (error) {
    console.error(error);
  }
};

export default logSynonym;
