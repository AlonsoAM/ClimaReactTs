import axios from "axios";
import { z } from 'zod/v4'
import type {SearchType, WeatherType} from "../types";

const WeatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp_max: z.number(),
    temp_min: z.number(),
    temp: z.number(),
  })
})

type WeatherSchema = z.infer<typeof WeatherSchema>

export const useWeather = () => {


  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      const geoResponse = await axios.get(geoUrl)
      const {lat, lon} = geoResponse.data[0]
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      //ZOD
      const weatherResponse = await axios.get(weatherUrl)
      const dataWeather = weatherResponse.data
      const result = WeatherSchema.safeParse(dataWeather)
      if (result.success) {
        const respuesta = result.data as WeatherType
        console.log(respuesta)
      }else{
        console.warn(result.error)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return {
    fetchWeather,
  }
}