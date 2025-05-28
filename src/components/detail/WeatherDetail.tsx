import type {WeatherSchema} from "../../hooks/useWeather.ts";
import {kelvinToCelsius} from "../../utils";

type WeatherDetailProps = {
  weather: WeatherSchema
}

const WeatherDetail = ({weather}: WeatherDetailProps) => {
  return (
    <div>
      <h2>Clima de {weather.name}</h2>
      <p>{kelvinToCelsius(weather.main.temp)}&deg;C</p>
      <div>
        <p>Min: <span>{kelvinToCelsius(weather.main.temp_min)}&deg;C</span></p>
        <p>Min: <span>{kelvinToCelsius(weather.main.temp_max)}&deg;C</span></p>
      </div>
    </div>
  )
}
export default WeatherDetail
