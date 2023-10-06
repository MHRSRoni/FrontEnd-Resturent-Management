import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import AllComplain from "./AllComplain";
import ChangeSlider from "./ChangeSlider";
import AboutSection from "./AboutSection";
import PromoCode from "./PromoCode";

const Index = () => {
    return (
        <Routes>
            <Route index element={<Overview />} />
            <Route path='complain' element={<AllComplain />} />
            <Route path='slider' element={<ChangeSlider />} />
            <Route path='about' element={<AboutSection />} />
            <Route path='promo' element={<PromoCode />} />
        </Routes>
    );
};

export default Index;