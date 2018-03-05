import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DiscoverScreen } from '../screens/Discover';
import HeaderNavigation from '../components/HeaderNavigation';
import SearchMovie from '../screens/SearchMovie';

const DiscoverNavigator = StackNavigator({
  discover: {
    screen: DiscoverScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderNavigation/>,
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
        height: 64
      }
    })
  },
  search: {
    screen: SearchMovie,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
}, {
  // headerMode: 'none',
  mode: 'modal'
});

export { DiscoverNavigator };
