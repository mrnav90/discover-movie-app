import { StackNavigator } from 'react-navigation';
import DiscoverScreen from '../screens/DiscoverScreen';

const DiscoverNavigator = StackNavigator({
  discover: {
    screen: DiscoverScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Discover'
    })
  }
});

export { DiscoverNavigator };
