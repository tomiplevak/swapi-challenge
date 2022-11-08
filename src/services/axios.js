import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: { "Content-Type": "application/json" },
});

export default apiClient;