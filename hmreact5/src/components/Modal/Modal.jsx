import PropTypes from "prop-types";
import { ReactComponent as Close } from "./img/Close.svg";
import cl from "./modal.module.scss";

const Modal = ({ id, header, close, text, actions }) => {
    return (
        <div
            className={cl.modal}
            onClick={(event) => {
                close(id);
            }}
        >
            <div
                className={cl.modalWind}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <h1 className={cl.title}>{header}</h1>
                <button
                    onClick={(event) => {
                        close(id);
                    }}
                    className={cl.close}
                >
                    <Close />
                </button>
                <p className={cl.text}>{text}</p>
                <div className={cl.actions}>{actions}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    id: PropTypes.number,
    header: PropTypes.string,
    close: PropTypes.func,
    text: PropTypes.string,
    actions: PropTypes.object,
};

export default Modal;
