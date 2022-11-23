import { AppHeader, Ongoingclass } from "../../components";
import avatar from '../../assets/pfp.png';

export const HomePage: React.FC = () => {
    return(
        <main>
            <AppHeader avatarSrc={avatar} />
            <Ongoingclass
                coursecode= 'sen201'
                course= 'intro to software engineering'
                theme="orange"
                location="online"
            />

        </main>
    )
}