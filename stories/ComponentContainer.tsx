import styled from "styled-components";

const ComponentContainer = ({children}: any) => {
    return (
        <Container>
            <InnerContainer>
                {children}
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 600px;
    margin: 40px auto;
`;

export default ComponentContainer;