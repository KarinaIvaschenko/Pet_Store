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
    products,
    readyToCart,
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
                        products={products}
                        setFavorites={setFavorites}
                        setCart={setCart}
                        addToCart={addToCart}
                        readyToCart={readyToCart}
                        addReadyToCart={addReadyToCart}
                    />
                }
            />
            <Route
                path="/cart"
                element={
                    <PageCart
                        removeCart={removeCart}
                        addReadyToCart={addReadyToCart}
                    />
                }
            />
            <Route
                path="/favorites"
                element={
                    <PageFavorites
                        removeFavorites={removeFavorites}
                        addFavorites={addFavorites}
                        favorites={favorites}
                        addReadyToCart={addReadyToCart}
                        addToCart={addToCart}
                        readyToCart={readyToCart}
                    />
                }
            />
            <Route path="*" element={<PageError />}></Route>
        </Routes>
    );
}
