import { StackNavigator } from 'react-navigation';
import DiscoverScreen from '../screens/DiscoverScreen';

const DiscoverNavigator = StackNavigator({
  discover: {
    screen: DiscoverScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Discover',
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb'
      }
    })
  }
});

export { DiscoverNavigator };
