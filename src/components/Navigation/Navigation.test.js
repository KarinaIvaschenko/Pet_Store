import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navigation", () => {
    test("We have Navigation?", () => {
        const { container } = render(
            <Router>
                <Navigation />
            </Router>
        );
        expect(container).toBeInTheDocument();
    });
    test("Snapshot Navigation", () => {
        const { container } = render(
            <Router>
                <Navigation />
            </Router>
        );
        expect(container).toMatchSnapshot();
    });
});
