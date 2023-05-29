import { createAction } from "@reduxjs/toolkit";
import sendRequest from "../../helpers/API/sendRequest";

export const actionsProducts = createAction("ACTIONS_PRODUCTS");

export const actionsFetchProducts = () => (dispatch) => {
    sendRequest("product.json").then((data) => {
        dispatch(actionsProducts(data));
    });
};
