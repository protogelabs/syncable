import style from './app-header.module.scss';

export interface AvatarProps {
  avatarSrc:string;
}

export const AppHeader:React.FC<AvatarProps> = ({ avatarSrc }) => {
  
  return(
    <header className={style.container}>
        <div className={style.pfpflex}>
            <h1>Syncable</h1>

            <img src={avatarSrc} alt="profile-picture" />
        </div>
    </header>
  )
}