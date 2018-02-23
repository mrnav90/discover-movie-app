import { NavigationActions } from 'react-navigation';
import { MovieNavigator } from '../navigators';

const initialState = MovieNavigator.router.getStateForAction(NavigationActions.init());

export default(state = initialState, action) => {
  const nextState = MovieNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
