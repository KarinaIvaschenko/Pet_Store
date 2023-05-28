import { combineReducers } from "redux";
import reducerModal from "./modal/reducerModal";

const reduserCombine = combineReducers({
    modal: reducerModal,
});

export default reduserCombine;
