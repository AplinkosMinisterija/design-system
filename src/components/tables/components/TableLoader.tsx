import styled from 'styled-components';
import LoaderComponent from 'src/components/common/LoaderComponent';

const TableLoader = () => {
  return (
    <LoaderWrapper>
      <LoaderComponent />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  opacity: 0.7;
`;

export default TableLoader;
