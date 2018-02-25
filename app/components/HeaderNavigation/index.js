import React, { Component } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HeaderNavigation extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: ''
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TextInput
            style={styles.input}
            placeholder="Search for a movie, tv show, person..."
            placeholderTextColor="#B5B5B5"
            value={this.state.search}
            onChangeText={(search) => this.setState({search})}/>
            <MaterialIcons style={styles.inputIcon} name="search" size={25} color="#A2A2A2" />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.onSearch}>
          <MaterialIcons name="send" size={25} color="#F08576" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  searchView: {
    position: 'relative'
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  btn: {
    shadowOffset: { width: 1,  height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    borderRadius: 30,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    backgroundColor: '#F3F3F3',
    borderRadius: 30,
    paddingLeft: 40,
    paddingRight: 10,
    width: '95%'
  }
});
