import React, { Component } from 'react';
import DiscoverListView from '../../components/DiscoverListView';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import {
  Dimensions
} from 'react-native';

export class DiscoverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'movie', title: 'Movies' },
        { key: 'tvshow', title: 'TV Shows' }
      ]
    };
  }

  onIndexChange = (index) => this.setState({ index });

  renderHeader = (props) => {
    return <TabBar
      style={{backgroundColor: 'white'}}
      indicatorStyle={{backgroundColor: '#F08576', height: 1}}
      tabStyle={{opacity: 1}}
      labelStyle={{color: '#F08576'}}
      {...props}
    />;
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'movie':
        return <DiscoverListView type="movie"/>;
      case 'tvshow':
        return <DiscoverListView type="tvshow"/>;
      default:
        return null;
    }
  }

  render() {
    return <TabViewAnimated
        style={{flex: 1}}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.onIndexChange}
        initialLayout={{width: Dimensions.get('window').width, height: 0}}
      />;
  }
}
