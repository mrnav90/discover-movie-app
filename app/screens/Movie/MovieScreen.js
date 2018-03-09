import React, { Component } from 'react';
import MovieListView from '../../components/MovieListView';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import {
  Dimensions,
  Animated
} from 'react-native';

export class MovieScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'now_playing', title: 'Now Playing' },
        { key: 'popular', title: 'Popular' },
        { key: 'top_rated', title: 'Top Rated' },
        { key: 'upcoming', title: 'Upcoming' }
      ]
    };
  }

  onIndexChange = (index) => this.setState({ index });

  renderHeader = (props) => {
    return <TabBar
      scrollEnabled={true}
      style={{backgroundColor: 'white'}}
      renderLabel={this.renderLabel(props)}
      indicatorStyle={{backgroundColor: '#F08576', height: 1}}
      labelStyle={{color: '#F08576'}}
      {...props}
    />;
  }

  renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#F08576' : '#A2A2A2')
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
      case 'now_playing':
        return <MovieListView type="now_playing"/>;
      case 'popular':
        return <MovieListView type="popular"/>;
      case 'top_rated':
        return <MovieListView type="top_rated"/>;
      case 'upcoming':
        return <MovieListView type="upcoming"/>;
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
    />;
  }
}
