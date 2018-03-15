import React, { Component } from 'react';
import {
  Text,
  View,
  findNodeHandle,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import { HOST_IMAGE } from '../../constants';
import FastImage from 'react-native-fast-image';
import * as Progress from 'react-native-progress';
import { createImageProgress } from 'react-native-image-progress';
import Swiper from 'react-native-swiper';
import DateTime from '../DateTime';
import { BlurView } from 'react-native-blur';
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
      movieRef: null,
      knowFor: []
    };
    this.avatarImageLoaded = this.avatarImageLoaded.bind(this);
    this.movieImageLoaded = this.movieImageLoaded.bind(this);
    this.avatarImage = null;
    this.movieImage = null;
  }

  componentDidMount() {
    this.getKnowFor();
  }

  avatarImageLoaded() {
    this.setState({ avatarRef: findNodeHandle(this.avatarImage) });
  }

  movieImageLoaded() {
    this.setState({ movieRef: findNodeHandle(this.movieImage) });
  }

  getKnowFor() {
    let movies = [];
    this.props.known_for.map(item => {
      movies.push(item.media_type === 'movie' ? item.title : item.name);
    });
    this.setState({knowFor: movies.join(', ')});
  }

  render() {
    const ImageCache = createImageProgress(FastImage);
    return (
      <View style={styles.container}>
        <View style={styles.actorView}>
          <ShowIf condition={this.props.profile_path !== null}>
            <ImageCache
              ref={(img) => { this.avatarImage = img; }}
              onLoadEnd={this.avatarImageLoaded}
              indicator={Progress.Pie}
              imageStyle={{borderRadius: 23}}
              style={{width: 45, height: 45}}
              source={{uri: HOST_IMAGE + 'w45' + this.props.profile_path}}
            />
          </ShowIf>
          <ShowIf condition={this.props.profile_path === null}>
            <Image source={require('../../../assets/images/no-avatar.jpg')} style={{width: 45, height: 45}} />
          </ShowIf>
          <View style={styles.actorInfo}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>{this.props.name}</Text>
            <Text style={{fontSize: 12, color: '#418ADB'}}>{this.state.knowFor}</Text>
          </View>
        </View>
        <Swiper height={300} autoplay showsPagination={false} autoplayTimeout={5}>
          {
            this.props.known_for.map((item, key) => {
              const imagePath = item.backdrop_path ? item.backdrop_path : item.poster_path;
              const imageWidth = Dimensions.get('window').width;
              let postTitle = null;
              let postDate = null;
              switch (item.media_type) {
                case 'movie':
                  postTitle = item.title;
                  postDate = item.release_date;
                  break;
                case 'tv':
                  postTitle = item.name;
                  postDate = item.first_air_date;
                  break;
                default:
                  postTitle = item.name;
                  postDate = item.first_air_date;
                  break;
              }
              return (
                <View style={{position: 'relative'}} key={key}>
                  <ImageCache
                    ref={(img) => { this.movieImage = img; }}
                    onLoadEnd={this.movieImageLoaded}
                    indicator={Progress.Pie}
                    style={{width: imageWidth, height: 300}}
                    source={{uri: HOST_IMAGE + 'w300' + imagePath}}
                  />
                  <BlurView style={styles.movieItem} viewRef={this.state.movieRef} blurType="dark" blurAmount={1}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{postTitle}</Text>
                    <DateTime style={{color: 'white', fontWeight: 'bold'}} date={postDate} format="MMMM D, YYYY"/>
                    <Text numberOfLines={3} ellipsizeMode="tail" style={{color: 'white'}}>{item.overview}</Text>
                  </BlurView>
                </View>
              );
            })
          }
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10
  },
  actorView: {
    padding: 10,
    flexDirection: 'row'
  },
  actorInfo: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'column'
  },
  movieItem: {
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 10,
    bottom: 0
  }
});
