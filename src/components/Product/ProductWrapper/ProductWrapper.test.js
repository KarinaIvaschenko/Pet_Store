import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductWrapper from "./ProductWrapper";

describe("ProductWrapper", () => {
    test("We have ProductWrapper?", () => {
        const { container } = render(<ProductWrapper />);
        expect(container).toBeInTheDocument();
    });
    test("Wrapper --className--", () => {
        const { container } = render(<ProductWrapper />);
        expect(container.firstChild).toHaveClass("wrapper");
    });
    test("renders children", () => {
        const children = <div>Test Content</div>;
        render(<ProductWrapper>{children}</ProductWrapper>);
        const childElement = screen.getByText("Test Content");
        expect(childElement).toBeInTheDocument();
    });
});
