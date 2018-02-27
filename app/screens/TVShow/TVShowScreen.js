import React, { Component } from 'react';
import TVShowView from '../../components/TVShowView';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import {
  Dimensions,
  Animated
} from 'react-native';

type Props = {};
export class TVShowScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'airing_today', title: 'TV Airing Today' },
        { key: 'on_the_air', title: 'On The Air' },
        { key: 'popular', title: 'Popular' },
        { key: 'top_rated', title: 'Top Rated' }
      ]
    };
  }
  onIndexChange = (index) => this.setState({ index });
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
      case 'airing_today':
        return <TVShowView type="airing_today"/>;
      case 'on_the_air':
        return <TVShowView type="on_the_air"/>;
      case 'popular':
        return <TVShowView type="popular"/>;
      case 'top_rated':
        return <TVShowView type="top_rated"/>;
      default:
        return null;
    }
  }
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
