import axios from "axios";
import getDefinitionText from "./getDefinitionText";

const getDefinition = async (e, setState) => {
  e.preventDefault();
  if (e.target.nodeName === "SPAN") {
    const word = e.target.innerText
      .toLowerCase()
      .replace("?", "")
      .replace("'s", "")
      .replace("'d", "ed");
    console.log(word);
    try {
      const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_KEY}
      `);
      const definition = getDefinitionText(response);
      console.log(response);
      setState({ word: word, definition: definition });
    } catch (error) {
      console.error(error);
    }
  }
};

export default getDefinition;
