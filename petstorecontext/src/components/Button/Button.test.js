import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

const handelClick = jest.fn();
describe("Button", () => {
    test("We have Button?", () => {
        const { container } = render(<Button />);
        expect(container).toBeInTheDocument();
    });
    test("Button --className--", () => {
        render(<Button classNames={"button"} text="button" />);
        expect(screen.getByText("button")).toHaveClass("button");
    });
    test("Button -- propsType", () => {
        render(<Button text="button" />);
        expect(screen.getByText("button")).toHaveProperty("type", "submit");
    });
    test("Button --click--", () => {
        render(<Button text="button" onClick={handelClick} />);
        const buttonEvent = screen.getByText("button");
        fireEvent.click(buttonEvent);
        expect(handelClick).toHaveBeenCalled();
    });
    test("snapshot Button", () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
});
