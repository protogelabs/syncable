import styles from './loading.module.scss'
import logo from '../../assets/loading.svg'

export const Loading: React.FC = () => {
  return (
    <div className={styles.textcolor} >


      <img src={logo} className={styles.img} alt="t" />
      Syncable

      <div className={styles.load}>

        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}