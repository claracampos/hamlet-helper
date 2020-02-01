const getDefinition = response => {
  const headword = response.data[0].hwi.hw;

  const matchingDefinitions = response.data.filter(
    item => item.hwi.hw === headword
  );

  const more = matchingDefinitions.map(
    item => `${item.fl} = ${item.shortdef[0]}`
  );

  console.log(headword + ": " + more);
};

export default getDefinition;
