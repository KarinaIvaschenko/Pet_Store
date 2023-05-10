import styled from "styled-components";

const StyledModal = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModalBody = styled.div`
    width: 516px;
    position: relative;
    border-radius: 4px;
    background-color: ${(props) => (props.$bgWind ? "#e74c3c" : "#efe472")};
`;

const StyledTitle = styled.h1`
    padding-left: 10px;
    font-weight: 700;
    margin: 0;
    padding: 5px 0 5px 20px;
    border-radius: 4px;
    font-size: 22px;
    line-height: 60px;
    color: #ffffff;
    font-family: "Helvetica 65 Medium", sans-serif;
    background-color: ${(props) => (props.$bgWind ? "#b3382c" : "#f0dd2f")};
`;

const StyledClose = styled.button`
    position: absolute;
    top: 20px;
    right: 40px;
    padding: 0;
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: transparent;
`;

const StyledAction = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-bottom: 35px;
`;

const StyledText = styled.p`
    text-align: center;
    margin-top: 35px;
    margin-bottom: 35px;
    color: #ffffff;
`;
export {
    StyledModal,
    StyledModalBody,
    StyledTitle,
    StyledClose,
    StyledAction,
    StyledText,
};
