import React from 'react';
import { StackNavigator } from 'react-navigation';
import { TVShowScreen } from '../screens/TVShow';
import HeaderNavigation from '../components/HeaderNavigation';

const TVShowNavigator = StackNavigator({
  tvshow: {
    screen: TVShowScreen,
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

export { TVShowNavigator };
