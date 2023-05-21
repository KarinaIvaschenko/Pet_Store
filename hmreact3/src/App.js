import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import "./app.scss";
import Footer from "./components/Footer/Footer";
import sendRequest from "./helpers/sendRequest";
const App = () => {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );
    const [products, setProducts] = useState([]);
    const [readyToCart, setReadyToCart] = useState(null);

    useEffect(() => {
        sendRequest("product.json").then((data) => {
            setProducts(data);
        });
    }, []);

    useEffect(() => {
        if (favorites.length) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        if (cart.length) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [favorites, cart]);

    const addReadyToCart = (card) => {
        setReadyToCart(card);
    };

    const addToCart = (card) => {
        const isInCart = cart.some((item) => item.id === card.id);
        if (!isInCart) {
            setCart((prev) => [...prev, card]);
            setReadyToCart(null);
        }
    };

    const removeCart = (card) => {
        const newCart = cart.filter((item) => item.id !== card.id);
        setCart(() => newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const addFavorites = (card) => {
        const isFavorites = favorites.some((item) => item.id === card.id);
        if (!isFavorites) {
            setFavorites((prev) => [...prev, card]);
        }
    };
    const removeFavorites = (card) => {
        const newFavorites = favorites.filter((item) => item.id !== card.id);
        setFavorites(() => newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    };

    return (
        <>
            <Header countStar={favorites.length} countCart={cart.length} />
            <main className="main">
                <AppRoutes
                    favorites={favorites}
                    cart={cart}
                    products={products}
                    setFavorites={setFavorites}
                    setCart={setCart}
                    addFavorites={addFavorites}
                    removeFavorites={removeFavorites}
                    readyToCart={readyToCart}
                    addToCart={addToCart}
                    removeCart={removeCart}
                    addReadyToCart={addReadyToCart}
                />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
