import React from "react";
import { StyledButton } from "./styledButton";
export default class Button extends React.Component {
    render() {
        const { onClick, backgroundColor, text, isDisabled, width } =
            this.props;
        return (
            <StyledButton
                onClick={onClick}
                style={{ backgroundColor: backgroundColor, width: width }}
                disabled={isDisabled}
            >
                {text}
            </StyledButton>
        );
    }
}
