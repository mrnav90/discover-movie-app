import { NavigationActions } from 'react-navigation';
import { TVShowNavigator } from '../navigators';

const initialState = TVShowNavigator.router.getStateForAction(NavigationActions.init());

export default(state = initialState, action) => {
  const nextState = TVShowNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
