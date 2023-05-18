import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = ({
    addFavorites,
    removeFavorites,
    openModal,
    addReadyToCart,
    products,
}) => {
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
};
ProductList.propTypes = {
    addFavorites: PropTypes.func,
    removeFavorites: PropTypes.func,
    openModal: PropTypes.func,
    addReadyToCart: PropTypes.func,
    products: PropTypes.array,
};
export default ProductList;
