import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from '../../components/ScrollableTabBar';
import MovieListView from '../../components/MovieListView';
export class MovieScreen extends Component<Props> {
  constructor(props) {
    super(props);
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
      <MovieListView type="nowPlaying" tabLabel="Now Playing"/>
      <MovieListView type="popular" tabLabel="Popular"/>
      <MovieListView type="top_rated" tabLabel="Top Rated"/>
      <MovieListView type="upcoming" tabLabel="Upcoming"/>
    </ScrollableTabView>;
  }
}
