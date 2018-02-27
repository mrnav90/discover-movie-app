import React, { Component } from 'react';
import TVShowListView from '../../components/TVShowListView';
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
        { key: 'popular_tv', title: 'Popular' },
        { key: 'top_rated_tv', title: 'Top Rated' },
        { key: 'on_the_air', title: 'On The Air' },
        { key: 'airing_today', title: 'TV Airing Today' }
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
        return <TVShowListView type="airing_today"/>;
      case 'on_the_air':
        return <TVShowListView type="on_the_air"/>;
      case 'popular_tv':
        return <TVShowListView type="popular_tv"/>;
      case 'top_rated_tv':
        return <TVShowListView type="top_rated_tv"/>;
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
