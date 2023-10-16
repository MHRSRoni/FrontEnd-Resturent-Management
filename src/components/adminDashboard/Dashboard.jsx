import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/container/Sidebar";
import Navbar from "./navbar/Navbar";

const Dashboard = () => {
    return (
        <div className="w-full flex">
            <Sidebar />
            <div className="w-5/6">
                <Outlet />
            </div>
                <Navbar />
        </div>
    );
};

export default Dashboard;