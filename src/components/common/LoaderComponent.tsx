import styled from 'styled-components';
import Loader from '../common/Loader';

const LoaderComponent = ({ className }: any) => (
  <LoaderContainer className={className} role="status" aria-live="polite" aria-busy="true">
    <Loader />
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
