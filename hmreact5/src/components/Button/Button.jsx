import PropTypes from "prop-types";
import cx from "classnames";
import "./Button.scss";
const Button = ({
    onClick,
    classNames,
    btnActive,
    backgroundColor,
    text,
    isDisabled,
}) => {
    return (
        <button
            className={cx("button", classNames, { active: btnActive })}
            onClick={onClick}
            style={{ backgroundColor: backgroundColor }}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    classNames: PropTypes.string,
    btnActive: PropTypes.string,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    isDisabled: PropTypes.bool,
};
export default Button;
