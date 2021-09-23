import { SET_PROJECT_FILTER } from '../actions/types';

const initialState = {
  filter: 'all',
};

export default function filterReducer(state = initialState, action) {
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
