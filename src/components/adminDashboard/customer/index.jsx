import { Route, Routes } from 'react-router-dom';

// import Dashboard from '../Dashboard';
import CustomerProfile from './CustomerProfile';
import Overview from './Overview';
import AllCustomer from './AllCustomer';

const Index = () => {
   return (
      <Routes>
         <Route index element={<Overview />} />
         <Route path="all" element={<AllCustomer />} />
         <Route path="profile/:id" element={<CustomerProfile />} />
      </Routes>
   );
};

export default Index;
