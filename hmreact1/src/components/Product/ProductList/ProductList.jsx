import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

export default class ProductList extends React.Component {
    render() {
        const {
            addFavorites,
            removeFavorites,
            openModal,
            addReadyToCart,
            products,
        } = this.props;
        const arr = products.map((card) => {
            return (
                <ProductCard
                    key={card.id}
                    card={card}
                    addFavorite={addFavorites}
                    removeFavorites={removeFavorites}
                    openModal={openModal}
                    addReadyToCart={addReadyToCart}
                />
            );
        });
        return <div className="wrapper">{arr}</div>;
    }
}
