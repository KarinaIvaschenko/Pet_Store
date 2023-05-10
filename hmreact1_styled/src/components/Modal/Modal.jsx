import React from "react";
import PropTypes from "prop-types";
import {
    StyledAction,
    StyledClose,
    StyledModal,
    StyledModalBody,
    StyledText,
    StyledTitle,
} from "./styledModal";
export default class Modal extends React.Component {
    render() {
        const { id, closeButton, $bgWind, header, close, text, actions } =
            this.props;
        return (
            <StyledModal
                onClick={(event) => {
                    close(id);
                }}
            >
                <StyledModalBody $bgWind={$bgWind}>
                    <StyledTitle $bgWind={$bgWind}>{header}</StyledTitle>
                    {closeButton && (
                        <StyledClose
                            onClick={(event) => {
                                close(id);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="26"
                                height="26"
                                fill="#fff"
                            >
                                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                            </svg>
                        </StyledClose>
                    )}
                    <StyledText>{text}</StyledText>
                    <StyledAction>{actions}</StyledAction>
                </StyledModalBody>
            </StyledModal>
        );
    }
}
Modal.propTypes = {
    closeButton: PropTypes.bool,
    header: PropTypes.string,
    close: PropTypes.func,
    text: PropTypes.string,
    actions: PropTypes.object,
};
