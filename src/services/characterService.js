import apiClient from "./axios";

export const getCharacters = async (pageNumber, searchedInput) => {
  try {
    let url = `/people/?search=${searchedInput}`;
    if (!searchedInput) {
      url = url + `&page=${pageNumber}`
    }
    const response = await apiClient.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await apiClient.get(`/people/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const CharacterService = { getCharacters, getCharacterById };
export default CharacterService;
