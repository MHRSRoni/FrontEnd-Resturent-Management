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
import AdminDashboard from "./components/adminDashboard";


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
        <Route path='/admin/*' element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
