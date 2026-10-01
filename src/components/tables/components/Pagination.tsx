import { ReactNode } from 'react';
import styled from 'styled-components';

export interface PaginationProps {
  pageCount: number;
  /** The current page, zero-based. */
  page: number;
  onPageChange: (page: number) => void;
  /** Pages kept visible around the current one. */
  pageRangeDisplayed?: number;
  /** Pages kept visible at either end. */
  marginPagesDisplayed?: number;
  previousLabel?: ReactNode;
  nextLabel?: ReactNode;
  ariaLabel?: string;
  previousAriaLabel?: string;
  nextAriaLabel?: string;
  className?: string;
}

export type PaginationItem = { kind: 'page'; index: number } | { kind: 'break'; jumpTo: number };

/** A break hiding exactly one page shows that page: "…" is no shorter than a number. */
const paginationItems = (
  pageCount: number,
  page: number,
  range: number,
  margin: number,
): PaginationItem[] => {
  const shown = new Set<number>();
  for (let index = 0; index < pageCount; index++) {
    if (index < margin || index >= pageCount - margin) shown.add(index);
  }
  const end = Math.min(pageCount - 1, Math.max(0, page - Math.floor(range / 2)) + range - 1);
  for (let index = Math.max(0, end - range + 1); index <= end; index++) shown.add(index);

  const items: PaginationItem[] = [];
  let previous = -1;
  for (const index of [...shown].sort((a, b) => a - b)) {
    if (index - previous === 2) {
      items.push({ kind: 'page', index: index - 1 });
    } else if (index - previous > 2) {
      const jumpTo = index <= page ? Math.max(0, page - range) : Math.min(pageCount - 1, page + range);
      items.push({ kind: 'break', jumpTo });
    }
    items.push({ kind: 'page', index });
    previous = index;
  }
  return items;
};

const Pagination = ({
  pageCount,
  page,
  onPageChange,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 3,
  previousLabel = '‹',
  nextLabel = '›',
  ariaLabel = 'Puslapiavimas',
  previousAriaLabel = 'Ankstesnis puslapis',
  nextAriaLabel = 'Kitas puslapis',
  className,
}: PaginationProps) => {
  const count = Math.max(1, pageCount);
  const current = Math.min(Math.max(page, 0), count - 1);
  const go = (next: number) => {
    if (next !== current && next >= 0 && next < count) onPageChange(next);
  };
  const isFirst = current === 0;
  const isLast = current === count - 1;

  return (
    <Nav aria-label={ariaLabel} className={className}>
      <List className="pagination">
        <li className={`page-item previous${isFirst ? ' disabled' : ''}`}>
          <PageButton
            type="button"
            className="page-link"
            aria-label={previousAriaLabel}
            disabled={isFirst}
            onClick={() => go(current - 1)}
          >
            {previousLabel}
          </PageButton>
        </li>
        {paginationItems(count, current, pageRangeDisplayed, marginPagesDisplayed).map((item) =>
          item.kind === 'break' ? (
            <li key={`break-${item.jumpTo < current ? 'back' : 'forward'}`} className="page-item break">
              <PageButton
                type="button"
                className="page-link"
                aria-label={
                  item.jumpTo < current ? 'Atgal per kelis puslapius' : 'Pirmyn per kelis puslapius'
                }
                onClick={() => go(item.jumpTo)}
              >
                …
              </PageButton>
            </li>
          ) : (
            <li key={item.index} className={`page-item${item.index === current ? ' active' : ''}`}>
              <PageButton
                type="button"
                className="page-link"
                aria-label={`${item.index + 1} puslapis`}
                aria-current={item.index === current ? 'page' : undefined}
                onClick={() => go(item.index)}
              >
                {item.index + 1}
              </PageButton>
            </li>
          ),
        )}
        <li className={`page-item next${isLast ? ' disabled' : ''}`}>
          <PageButton
            type="button"
            className="page-link"
            aria-label={nextAriaLabel}
            disabled={isLast}
            onClick={() => go(current + 1)}
          >
            {nextLabel}
          </PageButton>
        </li>
      </List>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

// Class names kept from react-paginate: consumers style them.
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 17px 0;
  justify-content: flex-end;

  .active .page-link {
    background: ${({ theme }) => theme.colors.primary} 0% 0% no-repeat padding-box;
    border-radius: 4px;
    color: white;
  }
`;

const PageButton = styled.button`
  height: 32px;
  min-width: 32px;
  margin: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  color: #231f20;
  background: none;
  border: none;
  font: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export default Pagination;
