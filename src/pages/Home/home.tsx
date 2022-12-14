import { AppHeader, Ongoingclass } from "../../components";
import avatar from '../../assets/pfp.png';
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import styles from './home.module.scss';

export const HomePage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return(
        <main>
            <AppHeader avatarSrc={avatar} />
            <Ongoingclass
                coursecode= 'SEN 201'
                course= 'Intro to Software Engineering'
                theme="#60cd99"
                location="Online"
            />

            <div className={styles.segment}>
                <span 
                    onClick={() => navigate('/main/home/class')}
                    className={`flex-center ${location.pathname === '/main/home/class' ? `${styles.active}` : null}`}>
                    Class
                </span>
                <span 
                    onClick={() => navigate('/main/home/time-table')}
                    className={`flex-center ${location.pathname === '/main/home/time-table' ? `${styles.active}` : null}`}>
                    Timetable
                </span>
            </div>
            <Outlet/>

        </main>
    )
}