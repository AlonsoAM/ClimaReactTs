import styles from './Form.module.css'
import {countries} from "../../data/countries.ts";
import {useState} from "react";
import type {SearchType} from "../../types";

const Form = () => {

  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: '',
  });

  return (
    <form className={styles.form}>
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
