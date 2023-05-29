import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductWrapper from "../../components/Product/ProductWrapper/ProductWrapper";
import { useModal } from "../../helpers/hooks/useModal";
import { useSelector } from "react-redux";

const PageHome = ({ removeFavorites, addFavorites, addToCart }) => {
    const products = useSelector((state) => state.cards.products);
    const { isModal, toggleModal } = useModal();
    const readyToCart = useSelector((state) => state.cart.readyToCart);
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
