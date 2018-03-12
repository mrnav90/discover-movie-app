import { NavigationActions } from 'react-navigation';
import { DiscoverNavigator } from '../navigators';

const initialState = DiscoverNavigator.router.getStateForAction(NavigationActions.init());

export default(state = initialState, action) => {
  const nextState = DiscoverNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
