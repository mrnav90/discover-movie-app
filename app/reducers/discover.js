import { NavigationActions } from 'react-navigation';
import { DiscoverNavigator } from '../navigators';
import { ACTION_TYPES } from '../constants';

const initialState = DiscoverNavigator.router.getStateForAction(NavigationActions.init());

export default(state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case ACTION_TYPES.SEARCH_MOVIE_SCREEN:
      nextState = DiscoverNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'search' }),
        state
      );
      break;
    default:
      nextState = DiscoverNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};
