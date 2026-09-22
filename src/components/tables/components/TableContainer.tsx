import { useEffect, ReactNode, useMemo } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router';
import styled from 'styled-components';
import { device, useWindowSize } from '../../../utils';
import Icon from '../../common/Icons';
import { TableData } from './types';
import { isEmpty } from 'lodash';
import PageSizeDropdown from './PageSizeDropdown';
import Pagination from './Pagination';

export interface TableLayoutProps {
  data?: TableData;
  pageName?: string;
  loading?: boolean;
  children: ReactNode;
  showPageSizeDropdown?: boolean;
  showPages?: boolean;
}

const DEFAULT_PAGE_SIZE = 10;

const getPageSizeStorageKey = (pageName: string) => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  return `tablePageSize_${path}_${pageName}`;
};

const readStoredPageSize = (pageName: string): number | null => {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(getPageSizeStorageKey(pageName));
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
};

const writeStoredPageSize = (pageName: string, size: number) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(getPageSizeStorageKey(pageName), String(size));
};

const TableContainer = ({
  data,
  pageName = 'page',
  loading,
  children,
  showPageSizeDropdown,
  showPages = true,
}: TableLayoutProps) => {
  const [searchParams] = useSearchParams();
  const params = useMemo(() => Object.fromEntries([...Array.from(searchParams)]), [searchParams]);
  const totalPages = data?.totalPages || 0;
  const showPagination = !!data?.data?.length && showPages;
  const isMobile = useWindowSize(device.mobileL);
  const pageRange = isMobile ? 1 : 3;
  const pageMargin = isMobile ? 1 : 3;
  const navigate = useNavigate();

  const urlPageSize = Number(params?.pageSize);
  const currentPageSize =
    Number.isFinite(urlPageSize) && urlPageSize > 0
      ? urlPageSize
      : (readStoredPageSize(pageName) ?? DEFAULT_PAGE_SIZE);

  useEffect(() => {
    const stored = readStoredPageSize(pageName);
    if (!params?.pageSize && stored && stored !== DEFAULT_PAGE_SIZE) {
      navigate(
        { search: `?${createSearchParams({ ...params, pageSize: String(stored) })}` },
        { replace: true },
      );
    } else if (params?.pageSize && Number(params.pageSize) > 0) {
      writeStoredPageSize(pageName, Number(params.pageSize));
    }
  }, [params, pageName, navigate]);

  useEffect(() => {
    if (!loading && totalPages < parseInt(params?.page)) {
      navigate({
        search: `?${createSearchParams({
          ...params,
          [pageName]: '1',
        })}`,
      });
    }
  }, [searchParams, data, loading, totalPages, params, pageName, navigate]);

  const handlePageChange = (selected: number) => {
    navigate({
      search: `?${createSearchParams({
        ...params,
        [pageName]: (selected + 1).toString(),
      })}`,
    });
  };

  const handlePageSizeChange = (newPageSize: number) => {
    writeStoredPageSize(pageName, newPageSize);
    navigate({
      search: `?${createSearchParams({
        ...params,
        [pageName]: '1',
        pageSize: String(newPageSize),
      })}`,
    });
  };

  return (
    <>
      <Container $disabled={!!loading}>
        {children}
        <Row>
          <>
            {showPageSizeDropdown && !isEmpty(data?.data) && (
              <PageSizeDropdown
                onChange={(newPageSize) => {
                  if (newPageSize !== currentPageSize) {
                    handlePageSizeChange(newPageSize);
                  }
                }}
                value={currentPageSize}
              />
            )}
            {showPagination && (
              <Pagination
                pageCount={totalPages || 1}
                page={parseInt(params?.[pageName]) - 1 || 0}
                pageRangeDisplayed={pageRange}
                marginPagesDisplayed={pageMargin}
                onPageChange={handlePageChange}
                previousLabel={<StyledIcon name="backward" />}
                nextLabel={<StyledIcon name="forward" />}
              />
            )}
          </>
        </Row>
      </Container>
    </>
  );
};

const Container = styled.div<{ $disabled: boolean }>`
  background-color: white;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1')};

  @media ${device.mobileL} {
    align-items: center;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const StyledIcon = styled(Icon)`
  color: #9aa4b2;
  font-size: 1.4rem;
  cursor: pointer;
`;

export default TableContainer;
