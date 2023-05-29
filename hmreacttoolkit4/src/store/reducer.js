import { combineReducers } from "@reduxjs/toolkit";
import reducerModal from "./modal/reducerModal";
import reducerCards from "./cards/reducerCards";
import reducerCart from "./cart/reducerCart";

const rootReducer = combineReducers({
    modal: reducerModal,
    cards: reducerCards,
    cart: reducerCart,
});
export default rootReducer;
