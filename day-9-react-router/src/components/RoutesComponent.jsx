import { Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import Landing from "./Landing";
import NotFound from "./NotFound";

function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="ProductPage" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesComponent;
