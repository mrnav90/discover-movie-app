import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ApplicationNavigator } from './navigators';

export default class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApplicationNavigator/>
      </Provider>
    );
  }
}
