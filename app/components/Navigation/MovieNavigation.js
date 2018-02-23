import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { movieListener } from '../../store';
import { MovieNavigator } from '../../navigators';

@connect(state => ({
  nav: state.movieNavigation
}))

export class MovieNavigation extends Component {
  render() {
    return (
      <MovieNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: movieListener
        })}
      />
    );
  }
}
