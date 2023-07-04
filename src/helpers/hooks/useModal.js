import { useDispatch, useSelector } from "react-redux";
import { actionToggleModal } from "../../store/modal/actionsModal";

export const useModal = () => {
    const isModal = useSelector((store) => store.modal.modal);
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(actionToggleModal(!isModal));
    };
    return { isModal, toggleModal };
};
