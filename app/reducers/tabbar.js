import { AppTabbarNavigator } from '../navigators';

export default(state, action) => {
  const nextState = AppTabbarNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
