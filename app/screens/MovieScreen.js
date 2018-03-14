import React, { Component } from 'react';
import TabViewScreen from '../components/TabViewScreen';

export default class MovieScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        { key: 'now_playing', title: 'Now Playing' },
        { key: 'popular', title: 'Popular' },
        { key: 'top_rated', title: 'Top Rated' },
        { key: 'upcoming', title: 'Upcoming' }
      ]
    };
  }

  render() {
    return <TabViewScreen scrollTab={true} routes={this.state.routes} />;
  }
}
