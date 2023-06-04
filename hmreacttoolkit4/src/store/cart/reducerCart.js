import { createReducer } from "@reduxjs/toolkit";
import {
    actionAddToCart,
    actionReadyCart,
    actionRemoveCart,
} from "./actionCart";
const initialState = {
    readyToCart: null,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
};
const reducerCart = createReducer(initialState, (builder) => {
    builder
        .addCase(actionReadyCart, (state, { payload }) => {
            state.readyToCart = payload;
        })
        .addCase(actionAddToCart, (state, { payload }) => {
            const isInCart = state.cart.some((item) => item.id === payload.id);
            if (!isInCart) {
                state.cart = [...state.cart, payload];
            }
        })
        .addCase(actionRemoveCart, (state, { payload }) => {
            const newCart = state.cart.filter((item) => item.id !== payload.id);
            state.cart = newCart;
            localStorage.setItem("cart", JSON.stringify(newCart));
        });
});

export default reducerCart;
