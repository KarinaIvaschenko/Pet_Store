import "@testing-library/jest-dom";
import reducerModal from "./reducerModal";
import { actionToggleModal } from "./actionsModal";

describe("reducerModal", () => {
    test("should return the initial state", () => {
        expect(reducerModal(undefined, { type: undefined })).toEqual({
            modal: false,
        });
    });
    test("should change the state of the modal", () => {
        const previousState = {};
        expect(reducerModal(previousState, actionToggleModal(false))).toEqual({
            modal: false,
        });
    });
});
