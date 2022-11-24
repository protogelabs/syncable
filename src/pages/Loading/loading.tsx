import styles from './loading.module.scss'
import logo from '../../assets/loading.svg'


export const Loading: React.FC = () => {

  return (
    <div className={styles.loadingPage}>

      <img src={logo} className={styles.img} alt="syncable-logo" />
      
      <p>Syncable</p>

      <div className={styles.loading}>
        <span className={styles.dot} id="dot-1"></span>
        <span className={styles.dot} id="dot-2"></span>
        <span className={styles.dot} id="dot-3"></span>
      </div>
    </div>
  )
}