const findIDFromString = (fullText, searchText) => {
  const indexOfSearchText = fullText.indexOf(searchText);
  const id = fullText
    .substring(indexOfSearchText + searchText.length)
    .replace("/", "");
  return id;
};

export default findIDFromString;

// This function will allow you to extract the numbers found in the url provided by the api.
// It's very helpful since the api does not provide any ID fields.
// You can extract the ID from people, vehicules and all the other fields just providing the URL and the string "people/"-"films/" depending the case.
