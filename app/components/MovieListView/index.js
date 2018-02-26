import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { Movie } from '../../api';
import MovieItem from '../MovieItem';
import { ShowIf } from '../../utils';

export default class MovieListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      isLoadMore: false,
      page: 1,
      total: 1,
      totalPage: 1
    };
    switch (this.props.type) {
      case 'nowPlaying':
        this.movieAPI = Movie.actions.now_playing
        break;
      case 'popular':
        this.movieAPI = Movie.actions.popular
        break;
      case 'top_rated':
        this.movieAPI = Movie.actions.top_rated
        break;
      case 'upcoming':
        this.movieAPI = Movie.actions.upcoming
        break;
      default: break;
    }
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.getListMovieFromNowPlaying();
  }

  getListMovieFromNowPlaying() {
    this.setState({isLoading: true});
    this.movieAPI.request({page: this.state.page}).then(response => {
      this.setState({
        isLoading: false,
        total: response.total_results,
        totalPage: response.total_pages,
        data: response.results
      });
    }).catch(error => {
      this.setState({isLoading: false});
    });
  }

  loadMore() {
    if (this.state.page < this.state.totalPage) {
      this.setState({isLoadMore: true, page: this.state.page + 1}, () => {
        this.discoverAPI.request({page: this.state.page}).then(response => {
          this.setState({
            isLoadMore: false,
            total: response.total_results,
            totalPage: response.total_pages,
            data: [...this.state.data, ...response.results]
          });
        }).catch(error => {
          this.setState({isLoadMore: false});
        });
      });
    }
  }

  renderLoadMore = () => {
    if (!this.state.isLoadMore) {
      return null;
    }
    return (
      <View style={{marginBottom: 10}}>
        <ActivityIndicator animating size="small" />
      </View>
    );
  }

  renderItem = ({item}) => (
    <MovieItem type={this.props.type} {...item} />
  );

  render() {
    return (
      <View style={styles.container}>
        <ShowIf condition={this.state.isLoading}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
            <ActivityIndicator animating size="small" />
          </View>
        </ShowIf>
        <FlatList
          data={this.state.data}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={this.renderLoadMore}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={100}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingLeft: 22,
    paddingBottom: 0
  }
});
