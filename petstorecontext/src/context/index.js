import { createContext, useState } from "react";

const ViewCardContext = createContext({});

const ViewCardProvider = ({ children }) => {
    const [viewCard, setViewCard] = useState("grid");
    const updateState = (value) => {
        setViewCard(value);
    };

    return (
        <ViewCardContext.Provider value={{ viewCard, updateState }}>
            {children}
        </ViewCardContext.Provider>
    );
};
export { ViewCardProvider, ViewCardContext };
