import axios from "axios";
import type {SearchType} from "../types";

export const useWeather = () => {

  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      const geoResponse = await axios.get(geoUrl)
      const {lat, lon} = geoResponse.data[0]
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      const weatherResponse = await axios.get(weatherUrl)
      console.log(weatherResponse.data)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    fetchWeather,
  }
}