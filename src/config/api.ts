import axios from "axios";

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    apikey: import.meta.env.VITE_MARVEL_CLIENT_KEY,
  },
});
