import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductWrapper from "../../components/Product/ProductWrapper/ProductWrapper";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button";
import { useModal } from "../../helpers/hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { actionAddToCart } from "../../store/cart/actionCart";
import { ViewCardContext } from "../../context";
import { useContext } from "react";
import ViewCard from "../../components/ViewCard/ViewCard";

const PageFavorites = ({ addReadyToCart }) => {
    const arrFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const { isModal, toggleModal } = useModal();
    const readyToCart = useSelector((state) => state.cart.readyToCart);
    const dispatch = useDispatch();
    const { viewCard } = useContext(ViewCardContext);
    return (
        <>
            <ViewCard />
            <ProductWrapper>
                {arrFavorites.map((card) => {
                    return (
                        <ProductCard
                            key={card.id}
                            productCard={
                                viewCard === "grid"
                                    ? "productCard"
                                    : "productCardList"
                            }
                            card={card}
                            openModal={toggleModal}
                            addReadyToCart={addReadyToCart}
                            addToCart
                            star
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
                                    dispatch(actionAddToCart(readyToCart));
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
