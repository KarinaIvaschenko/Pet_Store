import { useContext } from "react";
import "./ViewCard.scss";
import Button from "../Button";
import { ViewCardContext } from "../../context";

const ViewCard = () => {
    const { updateState } = useContext(ViewCardContext);
    return (
        <div className="filter-buttons">
            <Button
                classNames="list-view-button"
                onClick={() => updateState("row")}
                text="List view"
            />
            <Button
                classNames="grid-view-button"
                onClick={() => updateState("grid")}
                text="Grid view"
            />
        </div>
    );
};

export default ViewCard;
