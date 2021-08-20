import axios from "axios";
import { API_KEY } from "../Constants";

export const getWeather = async (lat, long, city) => {
  const queryString = city ? `${city},SP,Brasil` : "";
  let params = {};

  if (queryString !== "") {
    params = {
      lat: lat,
      lon: long,
      appid: API_KEY,
      lang: "pt",
    };
  }

  let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: queryString,
      ...params,
    },
  });
  return res.data;
};
