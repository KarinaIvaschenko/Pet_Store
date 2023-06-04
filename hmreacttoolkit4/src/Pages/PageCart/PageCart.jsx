import { useState } from "react";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductWrapper from "../../components/Product/ProductWrapper/ProductWrapper";
import Button from "../../components/Button";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../helpers/hooks/useModal";
import { useDispatch } from "react-redux";
import { actionRemoveCart } from "../../store/cart/actionCart";

const PageCart = () => {
    const arrCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [isRemovedCard, setIsRemovedCard] = useState(null);

    const { isModal, toggleModal } = useModal();
    const dispatch = useDispatch();
    return (
        <>
            <ProductWrapper>
                {arrCart.map((card) => {
                    return (
                        <ProductCard
                            key={card.id}
                            card={card}
                            openModal={toggleModal}
                            cross
                            readyToRemoveCard={setIsRemovedCard}
                        />
                    );
                })}
            </ProductWrapper>
            {isModal && (
                <Modal
                    text="Вы точно хотите добавить в корзину?"
                    header="Подтвердение"
                    close={toggleModal}
                    actions={
                        <>
                            <Button
                                onClick={() => {
                                    dispatch(actionRemoveCart(isRemovedCard));
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
