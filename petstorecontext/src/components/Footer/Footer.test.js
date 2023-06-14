import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
    test("We have Footer?", () => {
        const { container } = render(<Footer />);
        expect(container).toBeInTheDocument();
    });
    test("Footer --className--", () => {
        const { container } = render(<Footer />);
        expect(container.firstChild).toHaveClass("footer");
    });
});
