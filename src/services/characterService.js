import apiClient from "./axios";

const getCharacters = async () => {
    try {
      const response = await apiClient.get("/people");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

export default getCharacters;