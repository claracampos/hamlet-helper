import axios from "axios";
import processResponse from "./processResponse";

const getDefinition = async (e, setDefinition) => {
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
      setDefinition(APIDefinitions);
    } catch {
      setDefinition({
        word: "",
        definition: "",
        error: true
      });
    }
  }
};

export default getDefinition;
