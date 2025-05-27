import axios from "axios";
import type {SearchType, WeatherType} from "../types";

const isWeatherResponse = (dataWeather: unknown): dataWeather is WeatherType => (
  Boolean(dataWeather) &&
  typeof dataWeather === 'object' &&
  typeof (dataWeather as WeatherType).name === 'string' &&
  typeof (dataWeather as WeatherType).main === 'object' &&
  typeof (dataWeather as WeatherType).main.temp === 'number' &&
  typeof (dataWeather as WeatherType).main.temp_max === 'number' &&
  typeof (dataWeather as WeatherType).main.temp_min === 'number'
);

export const useWeather = () => {


  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      const geoResponse = await axios.get(geoUrl)
      const {lat, lon} = geoResponse.data[0]
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      // typeGuards
      const weatherResponse = await axios.get(weatherUrl)
      const result = weatherResponse.data
      const dataWeather = isWeatherResponse(result)
      if (dataWeather){
        console.log(result.name)
      }


    } catch (e) {
      console.error(e)
    }
  }

  return {
    fetchWeather,
  }
}