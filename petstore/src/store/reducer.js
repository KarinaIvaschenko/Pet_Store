import { combineReducers } from "@reduxjs/toolkit";
import reducerModal from "./modal/reducerModal";
import reducerCards from "./cards/reducerCards";
import reducerCart from "./cart/reducerCart";
import reducerFavorites from "./favorites/reducerFavorites";

const rootReducer = combineReducers({
    modal: reducerModal,
    cards: reducerCards,
    cart: reducerCart,
    favorites: reducerFavorites,
});
export default rootReducer;
