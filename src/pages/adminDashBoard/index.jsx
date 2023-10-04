import { Route, Routes } from 'react-router-dom';

const Index = () => {
  return (
    <Routes>
      <Route
        path="customer/create"
        element={<h2>this is create</h2>}
      />
      <Route
        path="customer/delete"
        element={<h2>this is delte</h2>}
      />
    </Routes>
  );
};

export default Index;
