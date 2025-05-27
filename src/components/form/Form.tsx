import styles from './Form.module.css'
import {countries} from "../../data/countries.ts";

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">Ciudad</label>
        <input type="text"
               id="city"
               name="city"
               placeholder={'Ciudad'}/>
      </div>
      <div className={styles.field}>
        <label htmlFor="country">País</label>
        <select>
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
