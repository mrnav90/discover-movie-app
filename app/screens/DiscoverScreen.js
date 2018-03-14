import React, { Component } from 'react';
import TabViewScreen from '../components/TabViewScreen';

export default class DiscoverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        { key: 'movie', title: 'Movies' },
        { key: 'tvshow', title: 'TV Shows' }
      ]
    };
  }

  render() {
    return <TabViewScreen scrollTab={false} routes={this.state.routes} />;
  }
}
