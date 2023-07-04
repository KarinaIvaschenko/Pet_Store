import { createReducer } from "@reduxjs/toolkit";
import {
    actionFavorites,
    actionAddFavorites,
    actionRemoveFavorites,
} from "./actionFavorites";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};
const reducerFavorites = createReducer(initialState, (builder) => {
    builder
        .addCase(actionFavorites, (state, { payload }) => {
            state.favorites = payload;
        })
        .addCase(actionAddFavorites, (state, { payload }) => {
            const isFavorites = state.favorites.some(
                (item) => item.id === payload.id
            );
            if (!isFavorites) {
                state.favorites = [...state.favorites, payload];
            }
        })
        .addCase(actionRemoveFavorites, (state, { payload }) => {
            const newFavorites = state.favorites.filter(
                (item) => item.id !== payload.id
            );
            state.favorites = newFavorites;
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
        });
});

export default reducerFavorites;
