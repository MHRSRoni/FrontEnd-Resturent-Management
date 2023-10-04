import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/adminDashboard/container/Sidebar';
import NavigationItem from '../../components/adminDashboard/presentional/MenuHeader';

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <NavigationItem text={'title'} />
        </Sidebar>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
