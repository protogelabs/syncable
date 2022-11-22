import { Outlet } from "react-router-dom";
import { Tabs ,Pfp,Ongoingclass} from "../../components";

export const MainLayout: React.FC = () => {
    
    
    return(
        <>
           <Pfp />
            <Ongoingclass
            coursecode= 'sen201'
            course= 'intro to software engineering'
            theme="orange"
            location="online"
            />
            <Outlet/>
            <Tabs/>
        </>
    )
}