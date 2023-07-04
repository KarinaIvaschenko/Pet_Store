import "@testing-library/jest-dom";
import reducerCards from "./reducerCards";
import { actionsProducts } from "./actionsCards";

describe("reducerCards", () => {
    test("should return the initial state", () => {
        expect(reducerCards(undefined, { type: undefined })).toEqual({
            products: [],
        });
    });
    test("must products", () => {
        const previousState = {};
        expect(reducerCards(previousState, actionsProducts([]))).toEqual({
            products: [],
        });
    });
});
