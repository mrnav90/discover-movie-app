import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { peopleListener } from '../../config';
import { PeopleNavigator } from '../../navigators';

@connect(state => ({
  nav: state.peopleNavigation
}))

export class PeopleNavigation extends Component {
  render() {
    return (
      <PeopleNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: peopleListener
        })}
      />
    );
  }
}
