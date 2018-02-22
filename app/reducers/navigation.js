import { StackNavigator, NavigationActions } from 'react-navigation';
import { navigator } from 'config';

const AppNavigator = StackNavigator(routes);
const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default(state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};
