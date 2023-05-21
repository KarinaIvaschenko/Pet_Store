import { useState } from "react";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductWrapper from "../../components/Product/ProductWrapper/ProductWrapper";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button";

const PageFavorites = ({
    addReadyToCart,
    removeFavorites,
    addToCart,
    readyToCart,
}) => {
    const arrFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal((prev) => !prev);
    };
    return (
        <>
            <ProductWrapper>
                {arrFavorites.map((card) => {
                    return (
                        <ProductCard
                            key={card.id}
                            card={card}
                            openModal={toggleModal}
                            removeFavorites={removeFavorites}
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

export default PageFavorites;
