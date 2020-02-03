import axios from "axios";
import getDefinition from "./getDefinition";

const logDefinition = async e => {
  const word = e.target.innerText.toLowerCase();
  try {
    const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_KEY}
      `);
    getDefinition(response);
  } catch (error) {
    console.error(error);
  }
};

export default logDefinition;
