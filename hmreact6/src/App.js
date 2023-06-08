import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import "./app.scss";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { actionsFetchProducts } from "./store/cards/actionsCards";

const App = () => {
    const favorites = useSelector((state) => state.favorites.favorites);
    const cart = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionsFetchProducts());
    }, []);

    useEffect(() => {
        if (favorites.length) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        if (cart.length) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [favorites, cart]);

    return (
        <>
            <Header countStar={favorites.length} countCart={cart.length} />
            <main className="main">
                <AppRoutes />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
