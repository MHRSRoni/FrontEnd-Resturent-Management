import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideMenu from "../components/UserDashboard/SideMenu";

const UserDashboardLayout = () => {
  return (
    <div className="bg-[#EFF0F4]">
      <NavBar />
      <div
        className="container mx-auto flex "
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className=" w-1/6 m-5 h-full overflow-auto ">
          <SideMenu />
        </div>
        <div className=" w-5/6  h-full overflow-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboardLayout;
