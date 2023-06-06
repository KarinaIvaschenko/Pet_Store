import { Routes, Route } from "react-router-dom";
import PageHome from "../Pages/PageHome";
import PageCart from "../Pages/PageCart";
import PageFavorites from "../Pages/PageFavorites";
import PageError from "../Pages/404";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/cart" element={<PageCart />} />
            <Route path="/favorites" element={<PageFavorites />} />
            <Route path="*" element={<PageError />}></Route>
        </Routes>
    );
}
