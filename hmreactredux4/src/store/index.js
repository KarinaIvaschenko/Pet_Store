import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduserCombine from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reduserCombine,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
