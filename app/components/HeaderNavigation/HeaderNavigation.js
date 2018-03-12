import React, { Component } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { searchAll } from '../../actions';

@connect(state => ({
  search: state.search
}))

class HeaderNavigation extends Component {

  static defaultProps = {
    hasBackButton: false
  }

  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search.keyword || 'The walking dead'
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    if (this.state.search !== '') {
      if (this.props.navigation.state.routeName !== 'Search') {
        this.props.navigation.navigate('Search');
      }
      this.props.dispatch(searchAll(this.state.search));
    } else {
      Alert.alert('Search', 'Please enter keywords!');
    }
  }

  render() {
    const styleInput = {
      width: this.props.hasBackButton ? '83%' : '88%',
      borderTopLeftRadius: this.props.hasBackButton ? 0 : 30,
      borderBottomLeftRadius: this.props.hasBackButton ? 0 : 30
    };
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TextInput
            style={[styles.input, styleInput]}
            placeholder="Search for a movie, tv show, person..."
            placeholderTextColor="#B5B5B5"
            value={this.state.search}
            onChangeText={(search) => this.setState({search})}/>
            <MaterialIcons style={styles.inputIcon} name="search" size={25} color="#A2A2A2" />
            <TouchableOpacity style={styles.btn} onPress={this.onSearch}>
              <MaterialIcons name="send" size={25} color="white" />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  searchView: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  btn: {
    padding: 7,
    paddingLeft: 10,
    backgroundColor: '#418ADB'
  },
  input: {
    height: 40,
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 30,
    color: '#A2A2A2',
    borderBottomLeftRadius: 30,
    paddingLeft: 40,
    paddingRight: 10,
    width: '100%'
  }
});

export default withNavigation(HeaderNavigation);
