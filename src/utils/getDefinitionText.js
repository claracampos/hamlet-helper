const getDefinitionText = response => {
  if (response.data[0]) {
    const headword = response.data[0].hwi.hw.toLowerCase();

    const matchingWords = response.data.filter(
      item => item.hwi.hw.toLowerCase() === headword
    );

    const offensiveContent = matchingWords.find(item => item.meta.offensive);

    if (offensiveContent) {
      return `${headword} - the list of definitions for this word includes sensitive or offensive content. Click "View More" to read definitions.`;
    }

    const matchingDefinitions = matchingWords.map(item => {
      if (item.fl) {
        return item.shortdef[0]
          ? ` ${item.fl}: ${item.shortdef[0]}`
          : ` ${item.fl}: ${item.cxs[0].cxl} ${item.cxs[0].cxtis[0].cxt}`;
      }
      return item.cxs[0].cxtis[0].cxt
        ? ` ${item.cxs[0].cxl} ${item.cxs[0].cxtis[0].cxt}`
        : ` ${item.cxs[0].cxl}`;
    });

    const definitionText = `${headword} - ${matchingDefinitions}`;
    return definitionText;
  }
};

export default getDefinitionText;
