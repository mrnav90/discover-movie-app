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

export default class MovieItem extends Component {

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
    const ImageCache = createImageProgress(FastImage);
    const imagePath = this.props.poster_path ? this.props.poster_path : this.props.backdrop_path;
    let postTitle = null;
    let postDate = null;
    switch (this.props.media_type) {
      case 'movie':
        postTitle = this.props.title;
        postDate = this.props.release_date;
        break;
      case 'tv':
        postTitle = this.props.name;
        postDate = this.props.first_air_date;
        break;
      default:
        postTitle = this.props.name;
        postDate = this.props.first_air_date;
        break;
    }
    return (
      <ShowIf condition={imagePath !== null}>
        <View style={styles.container}>
          <ImageCache
            ref={(img) => { this.backgroundImage = img; }}
            onLoadEnd={this.imageLoaded}
            indicator={Progress.Pie}
            resizeMode="contain"
            style={{width: 135}}
            source={{uri: HOST_IMAGE + 'w185' + imagePath}}
          />
          <View style={styles.itemInfo}>
            <Text style={styles.title}>{postTitle}</Text>
            <DateTime style={styles.date} date={postDate} format="MMMM D, YYYY"/>
            <Text numberOfLines={7} ellipsizeMode="tail" style={styles.description}>{this.props.overview}</Text>
          </View>
        </View>
      </ShowIf>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 200,
    marginTop: 10,
    flexDirection: 'row'
  },
  itemInfo: {
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 200
  },
  date: {
    color: '#B5B5B5',
    marginTop: 5
  },
  description: {
    marginTop: 5,
    width: 200
  }
});
