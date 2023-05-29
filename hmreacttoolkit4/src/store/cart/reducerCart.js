import { createReducer } from "@reduxjs/toolkit";
import { actionCart } from "./actionCart";
const initialState = {
    readyToCart: null,
};
const reducerCart = createReducer(initialState, (builder) => {
    builder.addCase(actionCart, (state, { payload }) => {
        state.readyToCart = payload;
    });
});

export default reducerCart;
