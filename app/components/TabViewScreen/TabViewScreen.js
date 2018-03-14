import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DiscoverListView from '../DiscoverListView';
import MovieListView from '../MovieListView';
import TVShowListView from '../TVShowListView';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import {
  Dimensions,
  Animated
} from 'react-native';

export default class TabViewScreen extends Component {

  static propTypes = {
    routes: PropTypes.array.isRequired,
    scrollTab: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: this.props.routes
    };
  }

  onIndexChange = (index) => this.setState({ index });

  renderHeader = (props) => {
    return <TabBar
      scrollEnabled={this.props.scrollTab}
      style={{backgroundColor: 'white'}}
      renderLabel={this.renderLabel(props)}
      indicatorStyle={{backgroundColor: '#418ADB', height: 1}}
      labelStyle={{color: '#418ADB'}}
      {...props}
    />;
  }

  renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#418ADB' : '#A2A2A2')
    );
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });
    return (
      <Animated.Text style={[{fontSize: 14, fontWeight: 'bold', margin: 8}, { color }]}>
        {route.title}
      </Animated.Text>
    );
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'movie':
      case 'tvshow':
        return <DiscoverListView type={route.key}/>;
      case 'now_playing':
      case 'popular':
      case 'top_rated':
      case 'upcoming':
        return <MovieListView type={route.key}/>;
      case 'airing_today':
      case 'on_the_air':
      case 'popular_tv':
      case 'top_rated_tv':
        return <TVShowListView type={route.key}/>;
      default:
        return null;
    }
  }

  render() {
    return <TabViewAnimated
        style={{flex: 1, backgroundColor: 'white'}}
        navigationState={this.state}
        animationEnabled={false}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.onIndexChange}
        initialLayout={{width: Dimensions.get('window').width, height: 0}}
        useNativeDriver
      />;
  }
}
