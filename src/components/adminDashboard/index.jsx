import { Route, Routes } from 'react-router-dom';
import Customer from "./customer";
import Food from "./food";
import Order from "./order";
import Staff from "./staff";
import Info from "./info";
import Dashboard from './Dashboard';
import Profile from './profile/Profile';


const Index = () => {
   return (
      <Routes>
        <Route index element={<Dashboard />} />
        <Route element={<Dashboard />} >
        <Route path='profile' element={<Profile />} />
         <Route path="customer/*" element={<Customer />} />
         <Route path="order/*" element={<Order />} />
         <Route path="food/*" element={<Food />} />
         <Route path="staff/*" element={<Staff />} />
         <Route path="info/*" element={<Info />} />
         </Route>
      </Routes>
   );
};

export default Index;
