import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import ProductWrapper from "../../components/Product/ProductWrapper/ProductWrapper";
import { modalClose, modalOpen } from "../../store/modal/actions";
import { useDispatch, useSelector } from "react-redux";

const PageHome = ({
    removeFavorites,
    addFavorites,
    addToCart,
    addReadyToCart,
    readyToCart,
}) => {
    const modal = useSelector((store) => store.modal.modal);
    const dispatch = useDispatch();

    const modal_open = () => {
        dispatch(modalOpen());
    };
    const modal_close = () => {
        dispatch(modalClose());
    };
    const products = useSelector((store) => store.products.products);
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
                            openModal={modal_open}
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
                    close={modal_close}
                    actions={
                        <>
                            <Button
                                onClick={() => {
                                    addToCart(readyToCart);
                                    modal_close();
                                }}
                                text={"Добавить"}
                                backgroundColor="#d3c1d9"
                            />
                            <Button
                                onClick={modal_close}
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
