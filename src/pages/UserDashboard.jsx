import { Outlet } from "react-router-dom";

import SideMenu from "../components/UserDashboard/SideMenu";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

const UserDashboard = () => {
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
        <div className=" w-5/6  h-full pt-2 overflow-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
