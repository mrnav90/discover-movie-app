import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  findNodeHandle,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { HOST_IMAGE } from '../../constants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import { createImageProgress } from 'react-native-image-progress';
import { BlurView } from 'react-native-blur';
import DateTime from '../DateTime';

export default class SearchItem extends Component {

  static propTypes = {
    media_type: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    first_air_date: PropTypes.string,
    release_date: PropTypes.string,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    vote_count: PropTypes.number,
    vote_average: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      viewRef: null
    };
    this.imageLoaded = this.imageLoaded.bind(this);
    this.backgroundImage = null;
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 200,
    marginTop: 10
  }
});
