import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

export const api = setupCache(
  Axios.create({
    baseURL: "http://pokeapi.co/api/v2/",
  })
);
