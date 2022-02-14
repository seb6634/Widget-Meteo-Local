import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "../index.css";

const Weather = ({ city }) => {
  const [temperature, setTemperature] = useState();
  const [temperatureMin, setTemperatureMin] = useState();
  const [temperatureMax, setTemperatureMax] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "";
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

  if (temperature && temperatureMin && temperatureMax === undefined) {
    return (
      <div className='weather-widget'>
        <div className='weather-widget__loading'>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Link to='#'>
      <div className='weather'>
        <div className='weather__container'>
          <div className='weather__content'>
            <p className='weather__city'>{city}</p>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt='Icon'
            />
          </div>
          <p className='weather__temperature'>{temperature}°</p>
          <p className='weather__temperature__min__max'>
            Min: {temperatureMin}° - Max: {temperatureMax}°
          </p>
        </div>
      </div>
    </Link>
  );
};

Weather.propTypes = {
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
};

export default Weather;
