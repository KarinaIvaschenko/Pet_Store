import "@testing-library/jest-dom";
import reducerCart from "./reducerCart";
import {
    actionReadyCart,
    actionAddToCart,
    actionRemoveCart,
    actionRemoveLocalStorage,
} from "./actionCart";

describe("reducerCart", () => {
    test("should return the initial state", () => {
        expect(reducerCart(undefined, { type: undefined })).toEqual({
            readyToCart: null,
            cart: JSON.parse(localStorage.getItem("cart")) || [],
        });
    });
    test("must ready cart", () => {
        const previousState = {};
        expect(reducerCart(previousState, actionReadyCart(null))).toEqual({
            readyToCart: null,
        });
    });
    test("must add to cart", () => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        const previousState = { cart: cartData };
        const newCart = { id: 1, name: "New Cart" };
        const action = actionAddToCart(newCart);
        expect(reducerCart(previousState, action)).toEqual({
            cart: [...cartData, newCart],
        });
    });
    test("must remove cart", () => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        const previousState = { cart: cartData };
        expect(reducerCart(previousState, actionRemoveCart(cartData))).toEqual({
            cart: cartData,
        });
    });
    test("must remove local storage", () => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        const previousState = { cart: cartData };
        expect(
            reducerCart(previousState, actionRemoveLocalStorage(cartData))
        ).toEqual({
            cart: cartData,
        });
    });
});
