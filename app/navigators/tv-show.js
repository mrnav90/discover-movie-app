import { StackNavigator } from 'react-navigation';
import TVShowScreen from '../screens/TVShowScreen';

const TVShowNavigator = StackNavigator({
  tvshow: {
    screen: TVShowScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'TV Shows',
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb'
      }
    })
  }
});

export { TVShowNavigator };
