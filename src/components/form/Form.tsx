import styles from './Form.module.css'
import {countries} from "../../data/countries.ts";
import {type FormEvent, useState} from "react";
import type {SearchType} from "../../types";
import Alert from "../alert/Alert.tsx";

type FromProps = {
  fetchWeather: () => void
}

const Form = ({fetchWeather}: FromProps) => {

  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: '',
  });

  const [alert, setAlert] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (Object.values(search).includes('')) {
      setAlert('Todos los campos son obligatorios')
      return
    }
    fetchWeather()
  }

  return (
    <form className={styles.form}
          onSubmit={handleSubmit}>
      {alert && <Alert message={alert}/>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad</label>
        <input type="text"
               id="city"
               name="city"
               value={search.city}
               onChange={(e) => setSearch({...search, city: e.target.value})}
               placeholder={'Ciudad'}/>
      </div>
      <div className={styles.field}>
        <label htmlFor="country">País</label>
        <select id={'country'}
                value={search.country}
                name={'country'}
                onChange={(e) => setSearch({...search, country: e.target.value})}>
          <option value={''}>--Seleccione un país--</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>{country.name}</option>
          ))}
        </select>
      </div>
      <input className={styles.submit} type="submit" value="Consultar Clima"/>
    </form>
  )
}
export default Form
