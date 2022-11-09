const findIDFromString = (fullText, searchText) => {
  const indexOfSearchText = fullText.indexOf(searchText);
  const id = fullText
    .substring(indexOfSearchText + searchText.length)
    .replace("/", "");
  return id;
};

export default findIDFromString;
