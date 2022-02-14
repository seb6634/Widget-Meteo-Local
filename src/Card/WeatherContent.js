import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../index.css";

const WeatherContent = ({ city }) => {
  const [temperature, setTemperature] = useState();
  const [temperatureMin, setTemperatureMin] = useState();
  const [temperatureMax, setTemperatureMax] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "5e74c46e8ba4b840680489e17bcef084";
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      const temp = Math.round(response.data.main.temp);
      const tempMin = Math.round(response.data.main.temp_min);
      const tempMax = Math.round(response.data.main.temp_max);

      setTemperature(temp);
      setTemperatureMin(tempMin);
      setTemperatureMax(tempMax);
      setIcon(response.data.weather[0].icon);
    });
  }, [city]);

  return (
    <div className='weather__page'>
      <div className='weather__content'>
        <p className='weather__city'>{city}</p>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='Icon'
        />
      </div>
      <p className='weather-__temperature'>{temperature}°</p>
      <p className='weather-__temperature__min__max'>
        Min: {temperatureMin}° - Max: {temperatureMax}°
      </p>
    </div>
  );
};

export default WeatherContent;
