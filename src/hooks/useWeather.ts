import axios from "axios";
import { object, string, number, type InferOutput, parse } from 'valibot'
import type {SearchType} from "../types";

const WeatherSchema = object({
  name: string(),
  main: object({
    temp_max: number(),
    temp_min: number(),
    temp: number(),
  })
})

type Weather = InferOutput<typeof WeatherSchema>

export const useWeather = () => {


  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      const geoResponse = await axios.get(geoUrl)
      const {lat, lon} = geoResponse.data[0]
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      //Valibot
      const weatherResponse = await axios.get(weatherUrl)
      const dataWeather = weatherResponse.data
      const result: Weather = parse(WeatherSchema, dataWeather)
      if (result){
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