import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/adminDashboard/sidebar';

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
