import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import { ReactComponent as Star } from "./icon/star.svg";
import "./ProductCard.scss";

const ProductCard = ({
    card,
    addFavorite,
    removeFavorites,
    openModal,
    addReadyToCart,
}) => {
    const [isFaworites, setIsFavorites] = useState(false);
    const { image, title, price, vendorСode, color } = card;
    return (
        <div className="productCard">
            <img className="img" src={image} alt="" />
            <h1 className="title">{title}</h1>
            <p className="price">Цена: {price} $</p>
            <p className="vendor-code">Артикул: {vendorСode}</p>
            <p>Цвет: {color}</p>
            <span
                className={isFaworites ? "star star--active" : "star"}
                onClick={() => {
                    setIsFavorites((prev) => !prev);
                    if (!isFaworites) {
                        addFavorite(card);
                    } else {
                        removeFavorites(card);
                    }
                }}
            >
                <Star />
            </span>
            <Button
                onClick={() => {
                    addReadyToCart(card);
                    openModal();
                }}
                text={"Add to cart"}
                backgroundColor="#d3c1f4"
                classNames="button--size"
            />
        </div>
    );
};

ProductCard.propTypes = {
    card: PropTypes.object,
    addFavorite: PropTypes.func,
    removeFavorites: PropTypes.func,
    openModal: PropTypes.func,
    addReadyToCart: PropTypes.func,
};
export default ProductCard;
