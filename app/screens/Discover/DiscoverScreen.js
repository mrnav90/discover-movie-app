import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from '../../components/ScrollableTabBar';
import DiscoverListView from '../../components/DiscoverListView';

export class DiscoverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  render() {
    return <ScrollableTabView
      initialPage={0}
      style={{backgroundColor: 'white'}}
      locked={true}
      tabBarBackgroundColor="white"
      tabBarActiveTextColor="#F08576"
      tabBarInactiveTextColor="#A2A2A2"
      renderTabBar={() => <ScrollableTabBar underlineStyle={{height: 1, backgroundColor: '#F08576'}} />}
    >
      <DiscoverListView type="movie" tabLabel="Movies"/>
      <DiscoverListView type="tvshow" tabLabel="TV Shows"/>
    </ScrollableTabView>;
  }
}
