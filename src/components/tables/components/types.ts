import { JSX } from 'react';
import { FilterConfig, RowConfig } from 'src/types';

export interface TableRow {
  id?: string | number;
  [key: string]: any;
}

export interface TableData {
  data: TableRow[];
  total?: number;
  page?: number;
  pageSize?: number;
  totalPages?: number;
}

export interface NotFoundInfoProps {
  text?: string;
  url?: string;
  urlText?: string;
  onClick?: () => void;
}

export enum TableItemWidth {
  MEDIUM = '76px',
  SMALL = '40px',
  LARGE = 'auto',
}

export type Column = {
  label: string | JSX.Element;
  mobileOrder?: number;
  desktopOrder?: number;
  show: boolean;
  visible?: boolean;
  width?: TableItemWidth;
};

export type Columns = {
  [key: string]: Column;
};

export interface ColumnButtonTexts {
  atLeastOneColumn: string;
  columns: string;
}

export interface ColumnButtonProps {
  columns: Columns;
  onToggle: (columns: Columns) => void;
  texts: ColumnButtonTexts;
  variant?: string;
}

export interface DynamicFilterProps {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  filterConfig: Record<string, FilterConfig>;
  rowConfig: RowConfig;
  onSetFilters: (filters: Record<string, any>) => void;
  filters: Record<string, any>;
  texts: {
    clearAll: string;
    filter: string;
  };
}
