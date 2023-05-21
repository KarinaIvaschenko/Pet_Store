import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductWrapper from "../../components/Product/ProductWrapper/ProductWrapper";

const PageHome = ({
    products,
    removeFavorites,
    addFavorites,
    addToCart,
    addReadyToCart,
    readyToCart,
}) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal((prev) => !prev);
    };
    return (
        <>
            <ProductWrapper>
                {products.map((card) => {
                    return (
                        <ProductCard
                            key={card.id}
                            card={card}
                            addFavorite={addFavorites}
                            removeFavorites={removeFavorites}
                            openModal={toggleModal}
                            addReadyToCart={addReadyToCart}
                            addToCart
                            star
                        />
                    );
                })}
            </ProductWrapper>
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
                                    toggleModal();
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
        </>
    );
};

export default PageHome;
