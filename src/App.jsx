import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/Line-Loader/Loader.css";
import Home from "./pages/Home";


import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import MenuPage from "./pages/Menu";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Otp from "./pages/Otp";

// eslint-disable-next-line react-refresh/only-export-components
export const BASE_URL =
  import.meta.env.VITE_BASE_URL ||
  "https://backend-resturent-team-b.onrender.com/api/v1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/itemDetailsPage/:id" element={<ItemDetailsPage />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
