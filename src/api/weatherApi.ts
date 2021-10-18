import axios from "axios";
import { BASE_URL } from "../utilities.tsx/Constants";

const apiKey = process.env.apiKey;
const weatherTemp = `${BASE_URL}${apiKey}`;

export const weatherApi = () => {
  return axios.get(weatherTemp);
};
