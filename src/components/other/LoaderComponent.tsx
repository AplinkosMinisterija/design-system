import styled from "styled-components";
import Loader from "./Loader";
import React from "react";

const LoaderComponent = ({ size = 40 }) => (
  <LoaderContainer>
    <Loader size={size} />
  </LoaderContainer>
);
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export default LoaderComponent;
