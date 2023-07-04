import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./Form";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
});

describe("Form", () => {
    test("We have Form?", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const formElement = screen.getByTestId("form");
        expect(formElement).toBeInTheDocument();
    });
    test("inputFirstName is onChange?", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const inputElement = screen.getByTestId("inputFirstName");

        fireEvent.change(inputElement, { target: { value: "John" } });

        expect(inputElement.value).toBe("John");
    });
    test("inputLastName is onChange?", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const inputElement = screen.getByTestId("inputLastName");

        fireEvent.change(inputElement, { target: { value: "John" } });

        expect(inputElement.value).toBe("John");
    });
    test("inputAge is onChange?", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const inputElement = screen.getByTestId("inputAge");

        fireEvent.change(inputElement, { target: { value: "20" } });

        expect(inputElement.value).toBe("20");
    });
    test("inputAdress is onChange?", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const inputElement = screen.getByTestId("inputAdress");

        fireEvent.change(inputElement, { target: { value: "vul" } });

        expect(inputElement.value).toBe("vul");
    });
    test("inputPhone is onChange?", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const inputElement = screen.getByTestId("inputPhone");

        fireEvent.change(inputElement, { target: { value: "(000)000-0000" } });

        expect(inputElement.value).toBe("(000)000-00-00");
    });
});
