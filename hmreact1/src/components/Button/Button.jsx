import React from "react";
import btn from "./button.module.scss";
export default class Button extends React.Component {
    render() {
        const { onClick, backgroundColor, text, isDisabled, width } =
            this.props;
        return (
            <button
                className={btn.button}
                onClick={onClick}
                style={{ backgroundColor: backgroundColor, width: width }}
                disabled={isDisabled}
            >
                {text}
            </button>
        );
    }
}
