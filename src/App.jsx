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
import UserDashboard from "./pages/UserDashboard";
import UserDashboardLayout from "./layout/UserDashboardLayout";
import MyProfile from "./components/UserDashboard/MyProfile";
import EditProfile from "./components/UserDashboard/EditProfile";
import ChangePassword from "./components/UserDashboard/ChangePassword";
import WishList from "./components/UserDashboard/WishList";

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
        <Route path="/user/dashboard" element={<UserDashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="wishList" element={<WishList />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
