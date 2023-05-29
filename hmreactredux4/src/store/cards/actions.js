import sendRequest from "../../helpers/sendRequest";

export const ACTION_PRODUCT = "ACTION_PRODUCT";

export const actionProduct = (data) => ({
    type: ACTION_PRODUCT,
    payload: data,
});

export const actionFetchProduct = () => (dispatch) => {
    sendRequest("product.json").then((data) => {
        console.log(data);
        dispatch(actionProduct(data));
    });
};
