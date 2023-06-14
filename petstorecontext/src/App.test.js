import "@testing-library/jest-dom";
import App from "./App";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/reducer";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
    const store = configureStore({ reducer: rootReducer });
    test("snapshot app", () => {
        const { container } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
