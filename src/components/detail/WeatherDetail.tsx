import type {WeatherSchema} from "../../hooks/useWeather.ts";
import {kelvinToCelsius} from "../../utils";
import styles from './WeatherDetail.module.css'

type WeatherDetailProps = {
  weather: WeatherSchema
}

const WeatherDetail = ({weather}: WeatherDetailProps) => {
  return (
    <div className={styles.container}>
      <h2>Clima de {weather.name}</h2>
      <p className={styles.current}>{kelvinToCelsius(weather.main.temp)}&deg;C</p>
      <div className={styles.temperatures}>
        <p>Min: <span>{kelvinToCelsius(weather.main.temp_min)}&deg;C</span></p>
        <p>Min: <span>{kelvinToCelsius(weather.main.temp_max)}&deg;C</span></p>
      </div>
    </div>
  )
}
export default WeatherDetail
