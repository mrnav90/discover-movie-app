import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppTabbarNavigator } from './navigators';

export default class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppTabbarNavigator/>
      </Provider>
    );
  }
}
