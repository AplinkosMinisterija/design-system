import styled from 'styled-components';
import Loader from '@/components/common/Loader';

const LoaderComponent = ({ className }: any) => (
  <LoaderContainer className={className}>
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
