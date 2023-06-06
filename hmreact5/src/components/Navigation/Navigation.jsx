import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/favorites">
                        Favorites
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/cart">
                        Cart
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
