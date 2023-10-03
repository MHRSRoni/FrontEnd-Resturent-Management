import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideMenu from "../components/Dashboard/SideMenu";

const DashboardLayout = () => {
  return (
    <div className="bg-[#EFF0F4]">
      <NavBar />
      <div
        className="container mx-auto flex "
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className=" w-1/6 m-5 ">
          <SideMenu />
        </div>
        <div className=" w-5/6 m-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
