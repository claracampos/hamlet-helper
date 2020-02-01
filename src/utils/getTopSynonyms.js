const getTopSynonyms = response => {
  const topSynonyms = [];
  const nestedSynonymArrays = response.data.map(element => element.meta.syns);
  nestedSynonymArrays.forEach(nestedArray =>
    nestedArray.forEach(nestedSynonyms => topSynonyms.push(nestedSynonyms[0]))
  );
  console.log(topSynonyms);
  return topSynonyms;
};

export default getTopSynonyms;
