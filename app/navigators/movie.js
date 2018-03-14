import React from 'react';
import { StackNavigator } from 'react-navigation';
import MovieScreen from '../screens/MovieScreen';
import HeaderNavigation from '../components/HeaderNavigation';

const MovieNavigator = StackNavigator({
  movie: {
    screen: MovieScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderNavigation/>,
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
        height: 64
      }
    })
  }
});

export { MovieNavigator };
