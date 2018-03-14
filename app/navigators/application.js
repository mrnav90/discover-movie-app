import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
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
        screen: SearchScreen,
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
