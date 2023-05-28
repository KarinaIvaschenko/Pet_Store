import { ACTION_MODAL_OPEN, ACTION_MODAL_CLOSE } from "./actions";

const initialState = {
    modal: false,
};
const reducerModal = (store = initialState, action) => {
    switch (action.type) {
        case ACTION_MODAL_OPEN:
            return { ...store, modal: action.payload };
        case ACTION_MODAL_CLOSE:
            return { ...store, modal: action.payload };
        default:
            return store;
    }
};

export default reducerModal;
