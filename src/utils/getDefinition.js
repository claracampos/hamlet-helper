import axios from "axios";
import processResponse from "./processResponse";

const getDefinition = async (e, setState) => {
  if (e.target.nodeName === "SPAN") {
    const word = e.target.innerText
      .toLowerCase()
      .replace("?", "")
      .replace("'s", "")
      .replace("'d", "ed");
    try {
      const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_KEY}
      `);
      const APIDefinitions = processResponse(response);
      setState({
        word: APIDefinitions.word,
        definition: APIDefinitions.definition
      });
    } catch (error) {
      setState({
        word: "error",
        definition: ""
      });
    }
  }
};

export default getDefinition;
