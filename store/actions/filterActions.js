import { SET_PROJECT_FILTER } from './types';

// eslint-disable-next-line import/prefer-default-export
export const setProjectFilter = (filter) => ({
  type: SET_PROJECT_FILTER,
  filter,
});
