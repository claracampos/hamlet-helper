//API reference: https://www.dictionaryapi.com/products/json#sec-2

const processResponse = response => {
  if (response.data[0]) {
    const headword = response.data[0].hwi.hw.toLowerCase();
    if (headword === "c & w") {
      throw Error;
    }

    const matchingWords = response.data.filter(
      item =>
        item.hwi.hw.toLowerCase() === headword &&
        item.fl !== "biographical name"
    );

    const offensiveContent = matchingWords.find(item => item.meta.offensive);

    if (offensiveContent) {
      return {
        word: headword,
        definition: [
          `the list of definitions for this word includes sensitive or offensive content. Click "View More" to read definitions.`
        ],
        error: false
      };
    }

    const matchingDefinitions = matchingWords.map(item => {
      if (item.fl) {
        if (item.shortdef[0]) {
          return item.shortdef[0].endsWith(": such as")
            ? ` ${item.fl}: ${item.shortdef[0].replace(": such as", "")}`
            : ` ${item.fl}: ${item.shortdef[0]}`;
        }
        return ` ${item.fl}: ${item.cxs[0].cxl} ${item.cxs[0].cxtis[0].cxt}`;
      }
      if (item.cxs[0].cxl && item.cxs[0].cxtis[0].cxt) {
        return `${item.cxs[0].cxl} ${item.cxs[0].cxtis[0].cxt}`;
      }
      if (item.cxs[0].cxtis[0].cxl && item.cxs[0].cxtis[0].cxt) {
        return `${item.cxs[0].cxtis[0].cxl} ${item.cxs[0].cxtis[0].cxt}`;
      }
      return `${item.cxs[0].cxl}`;
    });

    if (matchingDefinitions.length === 0) {
      throw Error;
    }

    const APIdefinitions = {
      word: headword,
      definition: matchingDefinitions,
      error: false
    };
    return APIdefinitions;
  }
};

export default processResponse;
