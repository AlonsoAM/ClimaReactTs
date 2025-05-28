import styles from './Alert.module.css'

type AlertProps = {
  message: string
}

const Alert = ({message}: AlertProps) => {
  return (
    <div className={styles.alert}>{message}</div>
  )
}
export default Alert
