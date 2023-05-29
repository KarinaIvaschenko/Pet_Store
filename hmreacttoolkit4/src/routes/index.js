import { Routes, Route } from "react-router-dom";
import PageHome from "../Pages/PageHome";
import PageCart from "../Pages/PageCart";
import PageFavorites from "../Pages/PageFavorites";
import PageError from "../Pages/404";

export default function AppRoutes({
    favorites,
    cart,
    setFavorites,
    setCart,
    addFavorites,
    removeFavorites,
    addToCart,
    removeCart,
    addReadyToCart,
}) {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PageHome
                        removeFavorites={removeFavorites}
                        addFavorites={addFavorites}
                        favorites={favorites}
                        cart={cart}
                        setFavorites={setFavorites}
                        setCart={setCart}
                        addToCart={addToCart}
                    />
                }
            />
            <Route
                path="/cart"
                element={<PageCart removeCart={removeCart} />}
            />
            <Route
                path="/favorites"
                element={
                    <PageFavorites
                        removeFavorites={removeFavorites}
                        addFavorites={addFavorites}
                        favorites={favorites}
                        addToCart={addToCart}
                    />
                }
            />
            <Route path="*" element={<PageError />}></Route>
        </Routes>
    );
}
