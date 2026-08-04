import { Columns } from './types';

export const getActiveColumns = (orderedColumns: Columns) =>
  Object.keys(orderedColumns).reduce((obj, key) => {
    if (orderedColumns[key as keyof Columns].show) {
      obj[key as keyof Columns] = orderedColumns[key as keyof Columns];
    }
    return obj;
  }, {} as Columns);
