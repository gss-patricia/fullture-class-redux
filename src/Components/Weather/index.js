import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { WeatherAction } from "../../Actions";

const Weather = (props) => {
  const { weather, getWeather } = props;

  const [location, setLocation] = useState(false);
  const [city, setCity] = useState("");
  const [cityR, setCityR] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      getWeather(position.coords.latitude, position.coords.longitude, cityR);
      setLocation(true);
    });
  }, [getWeather, cityR, city]);

  if (!location) {
    return <>Você precisa habilitar a localização no browser o/</>;
  } else if (!weather) {
    return <>Carregando o clima...</>;
  }

  const handleChange = (event) => {
    let value = event.target.value;
    if (event.keyCode === 13) {
      setCityR(value);
    }
    setCity(value);
  };

  return (
    <>
      <h3>
        Clima nas suas Coordenadas ({weather["weather"][0]["description"]})
      </h3>
      <label>Digite a cidade:</label>
      <input
        type="text"
        value={city}
        onKeyDown={handleChange}
        onChange={handleChange}
      />
      <hr />
      <ul>
        <li>Temperatura atual: {weather["main"]["temp"]}°</li>
        <li>Temperatura máxima: {weather["main"]["temp_max"]}°</li>
        <li>Temperatura minima: {weather["main"]["temp_min"]}°</li>
        <li>Pressão: {weather["main"]["pressure"]} hpa</li>
        <li>Umidade: {weather["main"]["humidity"]}%</li>
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.preferences.weather,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWeather: (latitude, longitude, city) =>
    dispatch(WeatherAction(latitude, longitude, city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
