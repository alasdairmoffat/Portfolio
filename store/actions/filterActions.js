import { SET_PROJECT_FILTER } from './types';

export const setProjectFilter = (filter) => ({
  type: SET_PROJECT_FILTER,
  filter,
});
