import { TabNavigator, TabBarBottom } from 'react-navigation';
import { DiscoverNavigation, MovieNavigation, PeopleNavigation, TVShowNavigation } from '../components/Navigation';

const AppTabbarNavigator = TabNavigator(
  {
    Discover: { screen: DiscoverNavigation },
    Movies: { screen: MovieNavigation },
    People: { screen: PeopleNavigation },
    TVShow: { screen: TVShowNavigation }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export { AppTabbarNavigator };
