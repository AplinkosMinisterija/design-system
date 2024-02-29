import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const StoryWrapper = ({ children }) => {
    return (_jsx(Container, { children: _jsx(InnerContainer, { children: children }) }));
};
const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    background-color: aliceblue;
    padding: 16px;
    box-sizing: border-box;
`;
const InnerContainer = styled.div `
    width: 100%;
    height: 100%;
    max-width: 600px;
    margin: 40px auto;
`;
export default StoryWrapper;
