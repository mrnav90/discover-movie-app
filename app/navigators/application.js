import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchMovie from '../screens/SearchMovie';
import { AppTabbarNavigator } from './tabbar';
import BackButton from '../components/BackButton';
import HeaderNavigation from '../components/HeaderNavigation';

const ApplicationNavigator = StackNavigator({
  Main: {
    screen: AppTabbarNavigator
  },
  Search: {
    screen: StackNavigator({
      main: {
        screen: SearchMovie,
        navigationOptions: ({ navigation }) => ({
          headerRight: <HeaderNavigation hasBackButton={true}/>,
          headerLeft: <BackButton/>,
          headerStyle: {
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#ebebeb',
            height: 64
          }
        })
      }
    })
  }
}, {
  initialRouteName: 'Main',
  headerMode: 'none'
});

export { ApplicationNavigator };
