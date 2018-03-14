import React, { Component } from 'react';
import { View } from 'react-native';
import SearchListView from '../components/SearchListView';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SearchListView/>
      </View>
    );
  }
}
