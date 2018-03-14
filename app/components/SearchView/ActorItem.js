import React, { Component } from 'react';
import {
  Text,
  View,
  findNodeHandle,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { HOST_IMAGE } from '../../constants';
import FastImage from 'react-native-fast-image';
import * as Progress from 'react-native-progress';
import { createImageProgress } from 'react-native-image-progress';
import DateTime from '../DateTime';
import { ShowIf } from '../../utils';

export default class ActorItem extends Component {

  static propTypes = {
    media_type: PropTypes.string,
    name: PropTypes.string,
    profile_path: PropTypes.string,
    known_for: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      avatarRef: null,
      movieRef: null
    };
    this.avatarImageLoaded = this.avatarImageLoaded.bind(this);
    this.movieImageLoaded = this.movieImageLoaded.bind(this);
    this.avatarImage = null;
    this.movieImage = null;
  }

  avatarImageLoaded() {
    this.setState({ avatarRef: findNodeHandle(this.avatarImage) });
  }

  movieImageLoaded() {
    this.setState({ movieRef: findNodeHandle(this.movieImage) });
  }

  render() {
    const ImageCache = createImageProgress(FastImage);
    return (
      <View style={styles.container}>
        <View style={styles.actorView}>
          <ImageCache
            ref={(img) => { this.avatarImage = img; }}
            onLoadEnd={this.avatarImageLoaded}
            indicator={Progress.Pie}
            imageStyle={{borderRadius: 23}}
            style={{width: 45, height: 45}}
            source={{uri: HOST_IMAGE + 'w45' + this.props.profile_path}}
          />
          <Text>{this.props.name}</Text>
          <Text>1111</Text>
        </View>
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
  },
  actorView: {
    padding: 10,
    flex: 1,
    flexDirection: 'column'
  }
});
