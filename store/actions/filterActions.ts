import { SET_PROJECT_FILTER } from './types';

export const setProjectFilter = (filter: string) => ({
  type: SET_PROJECT_FILTER,
  filter,
});
