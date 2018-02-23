import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { tvshowListener } from '../../store';
import { TVShowNavigator } from '../../navigators';

@connect(state => ({
  nav: state.tvshowNavigation
}))

export class TVShowNavigation extends Component {
  render() {
    return (
      <TVShowNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: tvshowListener
        })}
      />
    );
  }
}
