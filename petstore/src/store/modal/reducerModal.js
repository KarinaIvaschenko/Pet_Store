import { createReducer } from "@reduxjs/toolkit";
import { actionToggleModal } from "./actionsModal";

const initialState = {
    modal: false,
};
const reducerModal = createReducer(initialState, (builder) => {
    builder.addCase(actionToggleModal, (state, { payload }) => {
        state.modal = payload;
    });
});

export default reducerModal;
