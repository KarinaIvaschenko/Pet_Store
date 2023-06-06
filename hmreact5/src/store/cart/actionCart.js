import { createAction } from "@reduxjs/toolkit";

export const actionReadyCart = createAction("ACTION_CART");

export const actionAddToCart = createAction("ACTION_ADD_TO_CART");

export const actionRemoveCart = createAction("ACTION_REMOVE_CART");

export const actionRemoveLocalStorage = createAction(
    "ACTION_REMOVE_LOCAL_STORAGE"
);
