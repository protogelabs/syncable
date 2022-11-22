import style from './Pfp.module.scss'
import profile from '../../assets/pfp.png'

export const Pfp:React.FC = ()=>{
  return(
    <div className={style.container}>
        <header className={style.pfpflex}>
            <h1>Syncable</h1>


            <img src={profile} alt="" />
        </header>
    </div>
  )
}