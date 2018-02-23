import { StackNavigator } from 'react-navigation';
import MovieScreen from '../screens/MovieScreen';

const MovieNavigator = StackNavigator({
  movie: {
    screen: MovieScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Movies',
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb'
      }
    })
  }
});

export { MovieNavigator };
