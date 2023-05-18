import React from "react";
import "./Button.scss";
import cx from "classnames";

export default class Button extends React.Component {
    render() {
        const {
            onClick,
            classNames,
            btnActive,
            backgroundColor,
            text,
            isDisabled,
            width,
        } = this.props;
        return (
            <button
                className={cx("button", classNames, { active: btnActive })}
                onClick={onClick}
                style={{ backgroundColor: backgroundColor, width: width }}
                disabled={isDisabled}
            >
                {text}
            </button>
        );
    }
}
