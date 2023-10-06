import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import ALlOrder from "./AllOrder";
import OrderDetails from "./OrderDetails";

const Index = () => {
    return (
        <Routes>
            <Route index element={<Overview />} />
            <Route path='all' element={<ALlOrder />} />
            <Route path='details' element={<OrderDetails />} />
        </Routes>
    );
};

export default Index;