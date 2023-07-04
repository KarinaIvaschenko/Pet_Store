import { createAction } from "@reduxjs/toolkit";

export const actionFavorites = createAction("ACTION_FAVORITES");

export const actionAddFavorites = createAction("ACTION_ADD_FAVORITES");

export const actionRemoveFavorites = createAction("ACTION_REMOVE_FAVORITES");
