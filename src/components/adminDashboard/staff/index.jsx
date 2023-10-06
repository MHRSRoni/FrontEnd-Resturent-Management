import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import AllStaff from "./AllStaff";
import StaffDetails from "./StaffDetails";

const Index = () => {
    return (
        <Routes>
            <Route index element={<Overview />} />
            <Route path='all' element={<AllStaff />} />
            <Route path='details' element={<StaffDetails />} />
        </Routes>
    );
};

export default Index;