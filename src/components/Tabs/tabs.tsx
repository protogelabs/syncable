import { useLocation, useNavigate, } from "react-router-dom";
import styles from "./tabs.module.scss";

import { MdOutlineHome, MdOutlineSettings, MdHome, MdSettings, MdUploadFile } from "react-icons/md"
import { Button } from "../Button/button";


export const Tabs: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    //Icons
    const HomeIcon = location.pathname.includes('/main/home/') ? <MdHome size={40}/> : <MdOutlineHome size={40}/>
    const SettingsIcon = location.pathname === '/main/settings' ? <MdSettings size={40}/> : <MdOutlineSettings size={40}/>

    return(
        <div className={styles.tabs}>
            <div className={styles.tabButton} onClick={() => navigate('/main/home')}>
                {HomeIcon}
            </div>
            <div className={styles.tabButton}>
                <Button className={styles.uploadBtn}>
                    <MdUploadFile size={40}/>
                </Button>
            </div>
            <div className={styles.tabButton}>
                {SettingsIcon}
            </div>
        </div>
    )
}