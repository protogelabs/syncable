import { Outlet } from "react-router-dom";
import { Tabs ,Pfp,Ongoingclass} from "../../components";

export const MainLayout: React.FC = () => {
    
    
    return(
        <>
           <Pfp />
            <Ongoingclass />
            <Outlet/>
            <Tabs/>
        </>
    )
}