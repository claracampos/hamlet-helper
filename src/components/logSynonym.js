import axios from "axios";

const logSynonym = async e => {
  const word = e.target.innerText.toLowerCase();
  try {
    const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.REACT_APP_KEY}
      `);
    console.log(response.data[0].meta.syns[0]);
  } catch (error) {
    console.error(error);
  }
};

export default logSynonym;
