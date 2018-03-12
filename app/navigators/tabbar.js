import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  DiscoverNavigation,
  MovieNavigation,
  PeopleNavigation,
  TVShowNavigation
} from '../components/Navigation';

const AppTabbarNavigator = TabNavigator(
  {
    Discover: { screen: DiscoverNavigation },
    Movies: { screen: MovieNavigation },
    TVShow: {screen: TVShowNavigation },
    People: { screen: PeopleNavigation }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName = null;
        switch (navigation.state.routeName) {
          case 'Discover':
            iconName = 'public';
            break;
          case 'Movies':
            iconName = 'movie';
            break;
          case 'People':
            iconName = 'mood';
            break;
          case 'TVShow':
            iconName = 'tv';
            break;
          default: break;
        }
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#418ADB',
      inactiveTintColor: '#929292',
      showLabel: false,
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ebebeb'
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);

export { AppTabbarNavigator };
