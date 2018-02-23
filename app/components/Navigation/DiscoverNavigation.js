import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { discoverListener } from '../../store';
import { DiscoverNavigator } from '../../navigators';

@connect(state => ({
  nav: state.discoverNavigation
}))

export class DiscoverNavigation extends Component {
  render() {
    return (
      <DiscoverNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: discoverListener
        })}
      />
    );
  }
}
