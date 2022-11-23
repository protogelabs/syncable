import { Outlet } from "react-router-dom";
import { Tabs } from "../../components";

export const MainLayout: React.FC = () => {
    
    
    return(
        <>
            <Outlet/>
            <Tabs/>
        </>
    )
}