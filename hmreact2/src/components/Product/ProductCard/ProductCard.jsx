import React from "react";
import Button from "../../Button";
import { ReactComponent as Star } from "./img/star.svg";
import "./ProductCard.scss";

function checkIsFavorites(id) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.find((item) => item.id === id) ? true : false;
}

export default class ProductCard extends React.Component {
    state = { isFaworites: false, isCart: false };
    componentDidMount() {
        this.setState({ isFaworites: checkIsFavorites(this.props.card.id) });
    }
    render() {
        const {
            card,
            addFavorite,
            removeFavorites,
            openModal,
            addReadyToCart,
        } = this.props;
        const { image, title, price, vendorСode, color } = card;
        return (
            <div className="productCard">
                <img className="img" src={image} alt="" />
                <h1 className="title">{title}</h1>
                <p className="price">Цена: {price} $</p>
                <p className="vendor-code">Артикул: {vendorСode}</p>
                <p>Цвет: {color}</p>
                <span
                    className={
                        this.state.isFaworites ? "star star--active" : "star"
                    }
                    onClick={() => {
                        this.setState((prev) => ({
                            isFaworites: !prev.isFaworites,
                        }));
                        if (!this.state.isFaworites) {
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
    }
}
