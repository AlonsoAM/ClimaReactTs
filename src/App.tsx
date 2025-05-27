import styles from './App.module.css'
import Form from "./components/form/Form.tsx";
import {useWeather} from "./hooks/useWeather.ts";

function App() {

  const {fetchWeather} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather}/>
        <p>2</p>
      </div>
    </>
  )
}

export default App
