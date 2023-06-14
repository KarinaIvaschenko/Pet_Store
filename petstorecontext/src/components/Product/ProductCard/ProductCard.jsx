import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import { ReactComponent as Star } from "./img/star.svg";
import { ReactComponent as Cross } from "./img/cross.svg";
import "./ProductCard.scss";
import { useModal } from "../../../helpers/hooks/useModal";
import { useDispatch } from "react-redux";
import { actionReadyCart } from "../../../store/cart/actionCart";
import {
    actionAddFavorites,
    actionRemoveFavorites,
} from "../../../store/favorites/actionFavorites";

const checkIsFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.find((item) => item.id === id) ? true : false;
};

const ProductCard = ({
    productCard,
    card,
    star,
    cross,
    addToCart,
    readyToRemoveCard,
}) => {
    const [isFavorites, setIsFavorites] = useState(checkIsFavorites(card.id));
    const { toggleModal } = useModal();

    const { image, title, price, article, color } = card;
    const dispatch = useDispatch();
    const addReadyToCart = (card) => {
        dispatch(actionReadyCart(card));
    };

    return (
        <div className={productCard}>
            <img className="img" src={image} alt="" />
            <h1 className="title">{title}</h1>
            <p className="price">Цена: {price} $</p>
            <p className="vendor-code">Артикул: {article}</p>
            <p>Цвет: {color}</p>
            {star && (
                <button
                    className={isFavorites ? "star star--active" : "star"}
                    onClick={() => {
                        setIsFavorites((prev) => !prev);
                        if (!isFavorites) {
                            dispatch(actionAddFavorites(card));
                        } else {
                            dispatch(actionRemoveFavorites(card));
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
                        toggleModal();
                    }}
                >
                    <Cross />
                </button>
            )}
            {addToCart && (
                <Button
                    onClick={() => {
                        addReadyToCart(card);
                        toggleModal();
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
