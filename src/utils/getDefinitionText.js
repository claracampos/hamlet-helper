const getDefinitionText = response => {
  if (response.data[0]) {
    const headword = response.data[0].hwi.hw.toLowerCase();

    const matchingWords = response.data.filter(
      item => item.hwi.hw.toLowerCase() === headword
    );

    const matchingDefinitions = matchingWords.map(item =>
      item.fl ? `${item.fl} = ${item.shortdef[0]}` : `${item.cxs[0].cxl}`
    );

    const definitionText = headword + ": " + matchingDefinitions;
    return definitionText;
  }
};

export default getDefinitionText;
