import React, { Component } from 'react';
import DiscoverListView from '../../components/DiscoverListView';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import {
  Dimensions,
  Animated
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
        return <DiscoverListView type="movie"/>;
      case 'tvshow':
        return <DiscoverListView type="tvshow"/>;
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
