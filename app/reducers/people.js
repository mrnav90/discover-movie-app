import { NavigationActions } from 'react-navigation';
import { PeopleNavigator } from '../navigators';

const initialState = PeopleNavigator.router.getStateForAction(NavigationActions.init());

export default(state = initialState, action) => {
  const nextState = PeopleNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
