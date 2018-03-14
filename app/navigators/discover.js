import React from 'react';
import { StackNavigator } from 'react-navigation';
import DiscoverScreen from '../screens/DiscoverScreen';
import HeaderNavigation from '../components/HeaderNavigation';

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
  }
});

export { DiscoverNavigator };
