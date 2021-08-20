import { GET_WEATHER } from "../Constants";
import { getWeather } from "../Api";

const weatherRequestSuccess = (payload) => {
  return { type: GET_WEATHER, payload };
};

export const WeatherAction = (latitude, longitude, city = null) => {
  return (dispatch) => {
    return getWeather(latitude, longitude, city)
      .then((payload) => {
        dispatch(weatherRequestSuccess(payload));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
