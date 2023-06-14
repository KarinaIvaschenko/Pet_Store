import "@testing-library/jest-dom";
import reducerFavorites from "./reducerFavorites";
import {
    actionAddFavorites,
    actionFavorites,
    actionRemoveFavorites,
} from "./actionFavorites";

describe("reducerFavorites", () => {
    test("should return the initial state", () => {
        expect(reducerFavorites(undefined, { type: undefined })).toEqual({
            favorites: JSON.parse(localStorage.getItem("favorites")) || [],
        });
    });
    test("must save to local storage", () => {
        const previousState = {};
        const favoritesData =
            JSON.parse(localStorage.getItem("favorites")) || [];
        const action = actionFavorites(favoritesData);
        expect(reducerFavorites(previousState, action)).toEqual({
            favorites: favoritesData,
        });
    });
    test("must add", () => {
        const favoritesData =
            JSON.parse(localStorage.getItem("favorites")) || [];
        const newFavorite = { id: 1, name: "New Favorite" };
        const action = actionAddFavorites(newFavorite);
        const previousState = { favorites: favoritesData };
        expect(reducerFavorites(previousState, action)).toEqual({
            favorites: [...favoritesData, newFavorite],
        });
    });
    test("mist remove", () => {
        const favoritesData =
            JSON.parse(localStorage.getItem("favorites")) || [];
        const previousState = { favorites: favoritesData };
        expect(
            reducerFavorites(
                previousState,
                actionRemoveFavorites(favoritesData)
            )
        ).toEqual({ favorites: favoritesData });
    });
});
