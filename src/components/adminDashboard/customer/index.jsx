import { Route, Routes } from 'react-router-dom';

import Dashboard from '../Dashboard';
import Overview from './Overview';
import AllCustomer from './AllCustomer';
import CustomerProfile from './CustomerProfile';

const Index = () => {
   return (
      <Routes>
                <Route index element={<Overview />} />
                <Route path='all' element={<AllCustomer />} />
                <Route path='profile/:id' element={<CustomerProfile />} />
      </Routes>
   );
};

export default Index;
