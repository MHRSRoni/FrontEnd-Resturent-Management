import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/ui/LineLoader.css";
import Main from "./layout/Main";
import Home from "./pages/Home";
import MenuPage from "./pages/Menu";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Otp from "./pages/Otp";
import NoPage from "./pages/NoPage";
import DashboardHome from "./pages/adminDashBoard/Dashboard"

// eslint-disable-next-line react-refresh/only-export-components
export const BASE_URL =
  import.meta.env.VITE_BASE_URL ||
  "https://kachchi-palace-v1.onrender.com/api/v1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/itemDetailsPage/:id" element={<ItemDetailsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path='/admin' element={<DashboardHome />}>
          <Route path='customer/create' element={<h2>create customer</h2>}/>
          <Route path='customer/delete' element={<h2>delete customer</h2>}/>
          <Route path='staff/create' element={<h2>create staff</h2>}/>
          <Route path='staff/delete' element={<h2>delete staff</h2>}/>
          <Route path='food/create' element={<h2>create food</h2>}/>
          <Route path='food/delete' element={<h2>delete food</h2>}/>
          <Route path='order/create' element={<h2>create order</h2>}/>
          <Route path='order/delete' element={<h2>delete order</h2>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
