import axios from "axios";
import { BASE_URL } from "../utilities/Constants";

const apiKey = process.env.REACT_APP_API_KEY;
export const weatherUrl = `${BASE_URL}${apiKey}`;
export const weatherApi = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(weatherUrl, config);
};
