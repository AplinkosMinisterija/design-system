import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { device, useWindowSize } from '../../../utils';
import Icon from '../../common/Icons';
import LoaderComponent from '../../common/LoaderComponent';
import { TableData } from './types';

class ChildrenType {}

export interface TableLayoutProps {
  data?: TableData;
  pageName?: string;
  loading?: boolean;
  children: ChildrenType;
}

const TableContainer = ({ data, pageName = 'page', loading, children }: TableLayoutProps) => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...Array.from(searchParams)]);
  const totalPages = data?.totalPages || 0;
  const showPagination = !!data?.data?.length;
  const isMobile = useWindowSize(device.mobileL);
  const pageRange = isMobile ? 1 : 3;
  const pageMargin = isMobile ? 1 : 3;
  const navigate = useNavigate();

  useEffect(() => {
    const currentPage = parseInt(params?.[pageName]) || 1;
    if (!loading && (currentPage > totalPages || currentPage < 1)) {
      navigateToPage(1);
    }
  }, [searchParams, data, loading]);

  const navigateToPage = (pageNumber: number) => {
    navigate({
      search: `?${createSearchParams({
        ...params,
        [pageName]: pageNumber.toString(),
      })}`,
    });
  };

  const handlePageChange = (e: { selected: number }) => {
    navigateToPage(e.selected + 1);
  };

  if (loading) return <LoaderComponent />;

  return (
    <Container>
      {children}
      {showPagination && (
        <StyledReactPaginate
          pageCount={totalPages || 1}
          pageRangeDisplayed={pageRange}
          marginPagesDisplayed={pageMargin}
          forcePage={parseInt(params?.[pageName]) - 1 || 0}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          pageLinkClassName="page-link"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          pageClassName="page-item"
          breakClassName="page-item"
          nextClassName="page-item"
          previousClassName="page-item"
          aria-label="Pagination navigation"
          previousLabel={<StyledIcon name="backward" aria-label="Previous page" />}
          nextLabel={<StyledIcon name="forward" aria-label="Next page" />}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-x: auto;

  @media ${device.mobileL} {
    align-items: center;
  }
`;

const StyledIcon = styled(Icon)`
  color: #9aa4b2;
  font-size: 1.4rem;
  cursor: pointer;
`;

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 17px 0;

  .page-link {
    height: 32px;
    min-width: 32px;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    color: #231f20;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }

  .active a {
    background: ${({ theme }) => theme.colors.primary} 0% 0% no-repeat padding-box !important;
    border-radius: 4px;
    border: none;
    color: white;
  }
`;

export default TableContainer;
