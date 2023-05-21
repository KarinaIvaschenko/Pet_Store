import Navigation from "../Navigation";
import PropTypes from "prop-types";
import image from "./img/shopingcart.ico";
import { ReactComponent as Chosen } from "./img/svg/chosenSvg.svg";
import "./Header.scss";

const Header = ({ countStar, countCart }) => {
    return (
        <header className="header">
            <div className="header__option">
                <Navigation />
                <span className="chosenCount">
                    {countStar}
                    <Chosen />
                </span>
                <span className="cartCount">
                    {countCart}
                    <img className="cartImg" src={image} alt="" />
                </span>
            </div>
        </header>
    );
};

Header.propTypes = {
    countStar: PropTypes.number,
    countCart: PropTypes.number,
};
export default Header;
