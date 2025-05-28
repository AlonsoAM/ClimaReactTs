import styles from './App.module.css'
import Form from "./components/form/Form.tsx";
import {useWeather} from "./hooks/useWeather.ts";
import WeatherDetail from "./components/detail/WeatherDetail.tsx";
import Spinner from "./components/spinner/Spinner.tsx";
import Alert from "./components/alert/Alert.tsx";

function App() {

  const {weather, loading, notFound, fetchWeather, hasWeatherData} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather}/>
        {loading && <Spinner/>}
        {hasWeatherData && <WeatherDetail weather={weather}/>}
        {notFound && <Alert message={'No se encontró la ciudad'}/>}
      </div>
    </>
  )
}

export default App
