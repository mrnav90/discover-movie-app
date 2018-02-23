import { StackNavigator } from 'react-navigation';
import MovieScreen from '../screens/MovieScreen';

const MovieNavigator = StackNavigator({
  movie: {
    screen: MovieScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Movies'
    })
  }
});

export { MovieNavigator };
