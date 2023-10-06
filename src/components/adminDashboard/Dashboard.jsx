import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/container/Sidebar";

const Dashboard = () => {
    return (
        <div className="w-full flex">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Dashboard;