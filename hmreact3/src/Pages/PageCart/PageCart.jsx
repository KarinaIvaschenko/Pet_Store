import { useState } from "react";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductWrapper from "../../components/Product/ProductWrapper/ProductWrapper";
import Button from "../../components/Button";
import Modal from "../../components/Modal/Modal";

const PageCart = ({ addFavorites, removeFavorites, removeCart }) => {
    const arrCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [isRemovedCard, setIsRemovedCard] = useState(null);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal((prev) => !prev);
    };
    return (
        <>
            <ProductWrapper>
                {arrCart.map((card) => {
                    return (
                        <ProductCard
                            key={card.id}
                            card={card}
                            addFavorite={addFavorites}
                            removeFavorites={removeFavorites}
                            openModal={toggleModal}
                            cross
                            readyToRemoveCard={setIsRemovedCard}
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
                                    removeCart(isRemovedCard);
                                    toggleModal();
                                }}
                                text={"Удалить"}
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

export default PageCart;
