import { ACTION_TYPES } from '../constants';

export default(state = {}, action) => {
  let nextState = null;
  switch (action.type) {
    case ACTION_TYPES.SEARCH_ALL:
      nextState = {
        ...state,
        keyword: action.data
      };
      break;
    default: break;
  }
  return nextState || state;
};
