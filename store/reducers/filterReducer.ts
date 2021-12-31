import { SET_PROJECT_FILTER } from '../actions/types';

const initialState = {
  filter: 'all',
};

type ActionType = { type: typeof SET_PROJECT_FILTER; filter: string };

export default function filterReducer(
  state = initialState,
  action: ActionType,
) {
  switch (action.type) {
    case SET_PROJECT_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}
