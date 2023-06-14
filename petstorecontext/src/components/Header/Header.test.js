import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header", () => {
    test("We have Header?", () => {
        const { container } = render(
            <Router>
                <Header />
            </Router>
        );
        expect(container).toBeInTheDocument();
    });
    test("Header contains correct Links", () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        const favoritesLink = screen.getByTestId("favorites");
        expect(favoritesLink).toBeInTheDocument();
        expect(favoritesLink).toHaveAttribute("href", "/favorites");

        const cartLink = screen.getByTestId("cart");
        expect(cartLink).toBeInTheDocument();
        expect(cartLink).toHaveAttribute("href", "/cart");
    });
    test("Header displays correct countStar and countCart", () => {
        const countStar = 3;
        const countCart = 5;

        render(
            <Router>
                <Header countStar={countStar} countCart={countCart} />
            </Router>
        );

        const countStarElement = screen.getByTestId("countStar");
        expect(countStarElement).toBeInTheDocument();
        expect(countStarElement).toHaveTextContent(countStar.toString());

        const countCartElement = screen.getByTestId("countCart");
        expect(countCartElement).toBeInTheDocument();
        expect(countCartElement).toHaveTextContent(countCart.toString());
    });
});
