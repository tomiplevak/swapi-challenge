import apiClient from "./axios";

export const getCharacters = async () => {
    try {
      const response = await apiClient.get("/people");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

const CharacterService = {getCharacters}
export default CharacterService;