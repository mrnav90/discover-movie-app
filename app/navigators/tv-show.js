import { StackNavigator } from 'react-navigation';
import TVShowScreen from '../screens/TVShowScreen';

const TVShowNavigator = StackNavigator({
  tvshow: {
    screen: TVShowScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'TV Shows'
    })
  }
});

export { TVShowNavigator };
