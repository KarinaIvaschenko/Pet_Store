import { combineReducers } from "redux";
import reducerModal from "./modal/reducerModal";
import reducerCards from "./cards/reducer";

const reduserCombine = combineReducers({
    modal: reducerModal,
    products: reducerCards,
});

export default reduserCombine;
