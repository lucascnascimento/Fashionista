import axios from "axios";

const api = axios.create({
  baseURL: "https://undefined.netlify.app/api/catalog",
});

export default api;
