import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PageError from "./404";

describe("404", () => {
    test("snapshot 404", () => {
        const { container } = render(<PageError />);
        expect(container).toMatchSnapshot();
    });
});
