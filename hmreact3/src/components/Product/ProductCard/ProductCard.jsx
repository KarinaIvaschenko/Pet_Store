import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import { ReactComponent as Star } from "./img/star.svg";
import { ReactComponent as Cross } from "./img/cross.svg";
import "./ProductCard.scss";

const checkIsFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.find((item) => item.id === id) ? true : false;
};

const ProductCard = ({
    card,
    addFavorite,
    removeFavorites,
    openModal,
    addReadyToCart,
    addToCart,
    star,
    cross,
    readyToRemoveCard,
}) => {
    const [isFavorites, setIsFavorites] = useState(checkIsFavorites(card.id));
    // const [isCart, setIsCart] = useState(checkIsCart(card.id));
    const { image, title, price, vendorСode, color } = card;

    return (
        <div className="productCard">
            <img className="img" src={image} alt="" />
            <h1 className="title">{title}</h1>
            <p className="price">Цена: {price} $</p>
            <p className="vendor-code">Артикул: {vendorСode}</p>
            <p>Цвет: {color}</p>
            {star && (
                <button
                    className={isFavorites ? "star star--active" : "star"}
                    onClick={() => {
                        setIsFavorites((prev) => !prev);
                        if (!isFavorites) {
                            addFavorite(card);
                        } else {
                            removeFavorites(card);
                        }
                    }}
                >
                    <Star />
                </button>
            )}
            {cross && (
                <button
                    className="star"
                    onClick={() => {
                        readyToRemoveCard(card);
                        openModal();
                    }}
                >
                    <Cross />
                </button>
            )}
            {addToCart && (
                <Button
                    onClick={() => {
                        addReadyToCart(card);
                        openModal();
                    }}
                    text={"Add to cart"}
                    backgroundColor="#d3c1f4"
                    classNames="button--size"
                />
            )}
        </div>
    );
};

ProductCard.propTypes = {
    card: PropTypes.object,
    addFavorite: PropTypes.func,
    removeFavorites: PropTypes.func,
    openModal: PropTypes.func,
    addReadyToCart: PropTypes.func,
    addToCart: PropTypes.bool,
    star: PropTypes.bool,
    cross: PropTypes.bool,
};
export default ProductCard;
