import apiClient from "./axios";

export const getCharacters = async (pageNumber) => {
    try {
      const response = await apiClient.get(`/people/?page=${pageNumber}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

const CharacterService = {getCharacters}
export default CharacterService;