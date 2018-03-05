import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  findNodeHandle,
  StyleSheet
} from 'react-native';
import { HOST_IMAGE } from '../../constants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import { createImageProgress } from 'react-native-image-progress';
import { BlurView } from 'react-native-blur';
import DateTime from '../DateTime';

export default class MovieItem extends Component {
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
    let postTitle = null;
    let postDate = null;
    const Image = createImageProgress(FastImage);
    const imageWidth = Dimensions.get('window').width - 40;
    switch (this.props.type) {
      case 'now_playing':
      case 'popular':
      case 'top_rated':
      case 'upcoming':
      case 'movie':
        postTitle = this.props.title;
        postDate = this.props.release_date;
        break;
      case 'top_rated_tv':
      case 'popular_tv':
        postTitle = this.props.name;
        postDate = this.props.first_air_date;
        break;
      default:
        postTitle = this.props.name;
        postDate = this.props.first_air_date;
        break;
    }
    return (
      <View style={styles.container}>
        <View style={styles.itemImage}>
          <Image
            ref={(img) => { this.backgroundImage = img; }}
            onLoadEnd={this.imageLoaded}
            indicator={Progress.Pie}
            imageStyle={{borderRadius: 10}}
            style={{width: imageWidth, height: 450}}
            source={{uri: HOST_IMAGE + 'w300_and_h450_bestv2' + this.props.backdrop_path}}
          />
          <BlurView style={styles.itemContent} viewRef={this.state.viewRef} blurType="dark" blurAmount={1}>
            <Text style={styles.postTitle}>{postTitle}</Text>
            <DateTime style={styles.postRelease} date={postDate} format="MMMM D, YYYY"/>
            <View style={styles.viewFavorite}>
              <MaterialIcons style={{marginTop: 2}} name="favorite" size={15} color="white" />
              <Text style={styles.postFavorite}>{this.props.vote_count}</Text>
              <MaterialIcons style={{marginTop: 2}} name="grade" size={15} color="white" />
              <Text style={styles.postFavorite}>{this.props.vote_average}</Text>
            </View>
          </BlurView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: { width: 0,  height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemImage: {
    marginTop: 20,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden'
  },
  itemContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 20,
    bottom: 0
  },
  postTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  postRelease: {
    color: '#FCF8F9',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewFavorite: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row'
  },
  postFavorite: {
    color: '#FCF8F9',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5
  }
});
