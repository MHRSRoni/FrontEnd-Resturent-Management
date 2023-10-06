import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import AllFood from "./AllFood";
import FoodDetails from "./FoodDetails";
import CreateFood from "./CreateFood";
import Discount from "./Discount";

const Index = () => {
    return (
        <Routes>
            <Route index element={<Overview />} />
            <Route path='all' element={<AllFood />} />
            <Route path='details' element={<FoodDetails />} />
            <Route path='add' element={<CreateFood />} />
            <Route path='discount' element={<Discount />} />
        </Routes>
    );
};

export default Index;