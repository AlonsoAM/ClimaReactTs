export type SearchType = {
  city: string
  country: string
}

export type CountryType = {
  code: string
  name: string
}

export type WeatherType = {
  name: string
  main: {
    temp_max: number
    temp_min: number
    temp: number
  }
}