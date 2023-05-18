import { useState, useEffect } from "react";
import ProductList from "./components/Product/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button";
import sendRequest from "./helpers/sendRequest";
import "./app.scss";

const App = () => {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );
    const [modal, setModal] = useState(false);
    const [readyToCart, setReadyToCart] = useState(null);
    const [products, setProducts] = useState([]);

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

    const addFavorites = (card) => {
        const isFavorites = favorites.some((item) => item.id === card.id);
        if (!isFavorites) {
            setFavorites((prev) => [...prev, card]);
        }
    };
    const removeFavorites = (card) => {
        const newFavorites = favorites.filter((item) => item.id !== card.id);
        setFavorites(() => newFavorites);
    };

    const addToCart = (card) => {
        const isInCart = cart.some((item) => item.id === card.id);
        if (!isInCart) {
            setCart((prev) => [...prev, card]);
            setModal((prev) => !prev);
            setReadyToCart(null);
        }
    };

    const addReadyToCart = (card) => {
        setReadyToCart(card);
    };

    const toggleModal = () => {
        setModal((prev) => !prev);
    };
    return (
        <>
            <Header countStar={favorites.length} countCart={cart.length} />
            <main className="main">
                <ProductList
                    addFavorites={addFavorites}
                    removeFavorites={removeFavorites}
                    openModal={toggleModal}
                    addToCart={addToCart}
                    addReadyToCart={addReadyToCart}
                    products={products}
                />
                {modal && (
                    <Modal
                        text="Вы точно хотите добавить в корзину?"
                        header="Подтвердение"
                        close={toggleModal}
                        actions={
                            <>
                                <Button
                                    onClick={() => {
                                        addToCart(readyToCart);
                                    }}
                                    text={"Добавить"}
                                    backgroundColor="#d3c1d9"
                                />
                                <Button
                                    onClick={toggleModal}
                                    backgroundColor="#d3c1d9"
                                    text={"Отмена"}
                                />
                            </>
                        }
                    />
                )}
            </main>
            <Footer />
        </>
    );
};

export default App;
