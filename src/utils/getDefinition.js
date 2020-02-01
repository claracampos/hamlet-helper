const getDefinition = response => {
  if (response.data[0]) {
    const headword = response.data[0].hwi.hw;

    const matchingDefinitions = response.data.filter(
      item => item.hwi.hw === headword
    );

    const more = matchingDefinitions.map(item =>
      item.fl ? `${item.fl} = ${item.shortdef[0]}` : `${item.cxs[0].cxl}`
    );
    console.log(response.data);
    console.log(headword + ": " + more);
  }
};

export default getDefinition;
