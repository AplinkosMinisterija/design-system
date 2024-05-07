import { Columns } from '../../../types';

export const getActiveColumns = (orderedColumns: Columns) =>
  Object.keys(orderedColumns).reduce((obj, key) => {
    if (orderedColumns[key].show) {
      obj[key] = orderedColumns[key];
    }
    return obj;
  }, {});
