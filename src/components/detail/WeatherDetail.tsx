import type {WeatherSchema} from "../../hooks/useWeather.ts";

type WeatherDetailProps = {
  weather: WeatherSchema
}

const WeatherDetail = ({weather}: WeatherDetailProps)  => {
  return (
    <div>
      <h2>Clima de {weather.name}</h2>
    </div>
  )
}
export default WeatherDetail
