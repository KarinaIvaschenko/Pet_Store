import { createReducer } from "@reduxjs/toolkit";
import { actionsProducts } from "./actionsCards";

const initialState = {
    products: [],
};
const reducerCards = createReducer(initialState, (builder) => {
    builder.addCase(actionsProducts, (state, { payload }) => {
        state.products = payload;
    });
});

export default reducerCards;
