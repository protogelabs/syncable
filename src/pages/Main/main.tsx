import { Outlet } from "react-router-dom";
import { Tabs } from "../../components/Tabs/tabs";

export const MainLayout: React.FC = () => {
    
    
    return(
        <>
            <Outlet/>
            <Tabs/>
        </>
    )
}