import { ACTION_PRODUCT } from "./actions";

const initialState = {
    products: [],
};

const reducerCards = (store = initialState, action) => {
    switch (action.type) {
        case ACTION_PRODUCT:
            return { ...store, products: action.payload };
        // case ACTION_MODAL_CLOSE:
        //     return { ...store, modal: action.payload };
        default:
            return store;
    }
};

export default reducerCards;
