import React, { Component } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { searchScreen } from '../../actions';

@connect(state => ({
  nav: state.discoverNavigation
}))

export default class HeaderNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    this.props.dispatch(searchScreen(this.state));
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
          <MaterialIcons name="send" size={25} color="white" />
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
    padding: 7,
    paddingLeft: 10,
    backgroundColor: '#F08576'
  },
  input: {
    height: 40,
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingLeft: 40,
    paddingRight: 10,
    width: '100%'
  }
});
