export const ACTION_MODAL_OPEN = "ACTION_MODAL_OPEN";
export const ACTION_MODAL_CLOSE = "ACTION_MODAL_CLOSE";

export const modalOpen = () => ({
    type: ACTION_MODAL_OPEN,
    payload: true,
});

export const modalClose = () => ({
    type: ACTION_MODAL_CLOSE,
    payload: false,
});
