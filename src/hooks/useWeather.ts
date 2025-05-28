import axios from "axios";
import {z} from 'zod/v4'
import type {SearchType, WeatherType} from "../types";
import {useMemo, useState} from "react";

const WeatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp_max: z.number(),
    temp_min: z.number(),
    temp: z.number(),
  })
})

export type WeatherSchema = z.infer<typeof WeatherSchema>

const initialState = {
  name: '',
  main: {
    temp_max: 0,
    temp_min: 0,
    temp: 0,
  }
}

export const useWeather = () => {

  const [weather, setWeather] = useState<WeatherType>(initialState);

  const [loading, setLoading] = useState(false);

  const [notFound, setNotFound] = useState(false);

  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY
    setLoading(true)
    setWeather(initialState)
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      const geoResponse = await axios.get(geoUrl)
      // Comprobar si existe el elemento
      if (!geoResponse.data[0]) {
        setNotFound(true)
        return
      }
      const {lat, lon} = geoResponse.data[0]
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      const weatherResponse = await axios.get(weatherUrl)
      const dataWeather = weatherResponse.data
      const result = WeatherSchema.safeParse(dataWeather)
      if (result.success) {
        const respuesta = result.data as WeatherType
        setWeather(respuesta)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const hasWeatherData = useMemo(() => weather.name, [weather])

  return {
    fetchWeather,
    weather,
    hasWeatherData,
    loading,
    notFound
  }
}