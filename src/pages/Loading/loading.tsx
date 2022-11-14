import styles from './loading.module.scss'
import logo from '../../assets/loading.svg'

export const Loading: React.FC = () => {
  return (
    <div className={styles.textcolor} >


      <img src={logo} className={styles.img} alt="t" />
      Syncable

      <div className={styles.load}>

        <div className={styles.dot} id="dot-1"></div>
        <div className={styles.dot} id="dot-2"></div>
        <div className={styles.dot} id="dot-3"></div>
      </div>
    </div>
  )
}