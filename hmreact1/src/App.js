import React from "react";
import Modal from "./components/Modal/Modal";
import "./app.scss";
import Button from "./components/Button/Button";
export default class App extends React.Component {
    state = { modal1: false, modal2: false };
    handlerOpenModal = (modalID) => {
        this.setState({ [modalID]: !this.state[modalID] });
    };

    render() {
        return (
            <>
                <div className="buttons">
                    <Button
                        onClick={(event) => this.handlerOpenModal("modal1")}
                        backgroundColor="#b3382c"
                        text="Open first modal"
                        isDisabled={this.state.modal2 ? true : false}
                    />
                    <Button
                        onClick={(event) => this.handlerOpenModal("modal2")}
                        backgroundColor="#f0dd2f"
                        text=" Open second modal"
                        isDisabled={this.state.modal1 ? true : false}
                    />
                </div>
                {this.state.modal1 && (
                    <Modal
                        header={"Header"}
                        closeButton
                        background="blue"
                        id="modal1"
                        close={this.handlerOpenModal}
                        text={"Text"}
                        actions={
                            <>
                                <Button
                                    // onClick={(event) =>
                                    //     this.handlerOpenModal("modal1")
                                    // }
                                    width="100px"
                                    backgroundColor="#b3382c"
                                    text="Ok"
                                />
                                <Button
                                    onClick={(event) =>
                                        this.handlerOpenModal("modal1")
                                    }
                                    width="100px"
                                    backgroundColor="#b3382c"
                                    text="Cancel"
                                />
                            </>
                        }
                    />
                )}
                {this.state.modal2 && (
                    <Modal
                        header={"Header"}
                        closeButton
                        id="modal2"
                        backgroundColor="#f0dd2f"
                        close={this.handlerOpenModal}
                        text={"Text"}
                        actions={
                            <>
                                <Button
                                    // onClick={(event) =>
                                    //     this.handlerOpenModal("modal2")
                                    // }
                                    backgroundColor="#f0dd2f"
                                    text={"Ok"}
                                />
                                <Button
                                    onClick={(event) =>
                                        this.handlerOpenModal("modal2")
                                    }
                                    backgroundColor="#f0dd2f"
                                    text={"Cancel"}
                                />
                            </>
                        }
                    />
                )}
            </>
        );
    }
}
