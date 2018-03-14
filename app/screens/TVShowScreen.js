import React, { Component } from 'react';
import TabViewScreen from '../components/TabViewScreen';

export default class TVShowScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        { key: 'popular_tv', title: 'Popular' },
        { key: 'top_rated_tv', title: 'Top Rated' },
        { key: 'on_the_air', title: 'On The Air' },
        { key: 'airing_today', title: 'TV Airing Today' }
      ]
    };
  }

  render() {
    return <TabViewScreen scrollTab={true} routes={this.state.routes} />;
  }
}
