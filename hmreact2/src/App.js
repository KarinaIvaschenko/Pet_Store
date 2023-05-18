import React from "react";
import ProductList from "./components/Product/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button";
import "./app.scss";
import sendRequest from "./helpers/sendRequest";

export default class App extends React.Component {
    state = {
        favorites: JSON.parse(localStorage.getItem("favorites")) || [],
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        modal: false,
        readyToCart: null,
        products: [],
    };

    componentDidMount() {
        sendRequest("product.json").then((data) => {
            this.setState({ products: data });
        });
    }
    componentDidUpdate() {
        if (this.state.favorites.length) {
            localStorage.setItem(
                "favorites",
                JSON.stringify(this.state.favorites)
            );
        }
        if (this.state.cart.length) {
            localStorage.setItem("cart", JSON.stringify(this.state.cart));
        }
    }
    addFavorites = (card) => {
        const isFavorites = this.state.favorites.some(
            (item) => item.id === card.id
        );
        if (!isFavorites) {
            this.setState((prev) => ({
                favorites: [...prev.favorites, card],
            }));
        }
    };
    removeFavorites = (card) => {
        const newFavorites = this.state.favorites.filter(
            (item) => item.id !== card.id
        );
        this.setState(() => ({
            favorites: newFavorites,
        }));
    };

    addToCart = (card) => {
        const isInCart = this.state.cart.some((item) => item.id === card.id);
        if (!isInCart) {
            this.setState((prev) => ({
                cart: [...prev.cart, card],
                modal: !prev.modal,
                readyToCart: null,
            }));
        }
    };

    addReadyToCart = (card) => {
        this.setState(() => ({
            readyToCart: card,
        }));
    };

    toggleModal = () => {
        this.setState((prev) => ({
            modal: !prev.modal,
        }));
    };

    render() {
        const { favorites, cart } = this.state;
        return (
            <>
                <Header countStar={favorites.length} countCart={cart.length} />
                <main className="main">
                    <ProductList
                        addFavorites={this.addFavorites}
                        removeFavorites={this.removeFavorites}
                        openModal={this.toggleModal}
                        addToCart={this.addToCart}
                        addReadyToCart={this.addReadyToCart}
                        products={this.state.products}
                    />
                    {this.state.modal && (
                        <Modal
                            text="Вы точно хотите добавить в корзину?"
                            header="Подтвердение"
                            close={this.toggleModal}
                            actions={
                                <>
                                    <Button
                                        onClick={() => {
                                            this.addToCart(
                                                this.state.readyToCart
                                            );
                                        }}
                                        text={"Добавить"}
                                        backgroundColor="#d3c1d9"
                                    />
                                    <Button
                                        onClick={this.toggleModal}
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
    }
}
