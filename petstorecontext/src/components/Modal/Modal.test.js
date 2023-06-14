import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
    test("We have Modal?", () => {
        const { container } = render(<Modal />);
        expect(container).toBeInTheDocument();
    });
    test("snapshot Modal", () => {
        const { container } = render(<Modal />);
        expect(container).toMatchSnapshot();
    });
});
