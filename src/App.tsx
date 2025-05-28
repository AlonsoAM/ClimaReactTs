import styles from './App.module.css'
import Form from "./components/form/Form.tsx";
import {useWeather} from "./hooks/useWeather.ts";
import WeatherDetail from "./components/detail/WeatherDetail.tsx";

function App() {

  const {weather, fetchWeather} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather}/>
        <WeatherDetail weather={weather} />
      </div>
    </>
  )
}

export default App
