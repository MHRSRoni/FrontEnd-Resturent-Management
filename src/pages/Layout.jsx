import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
