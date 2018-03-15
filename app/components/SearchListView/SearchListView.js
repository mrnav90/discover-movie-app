import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Search } from '../../api';
import { Bubbles } from 'react-native-loader';
import { ShowIf } from '../../utils';
import ActorItem from './ActorItem';
import MovieItem from './MovieItem';

@connect(state => ({
  search: state.search
}))

export default class SearchListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.search.keyword,
      data: [],
      isLoading: false,
      isLoadMore: false,
      page: 1,
      total: 1,
      totalPage: 1
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.getSearchResults();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({page: 1, keyword: nextProps.search.keyword}, () => {
      this.getSearchResults();
    });
  }

  getSearchResults() {
    const params = {
      query: this.state.keyword,
      page: this.state.page
    };
    this.setState({isLoading: true});
    Search.actions.all.request(params).then(response => {
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
        Search.actions.all.request({page: this.state.page}).then(response => {
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
    ['tv', 'movie'].indexOf(item.media_type) !== -1 ? <MovieItem {...item} /> : <ActorItem {...item} />
  );

  render() {
    return (
      <View style={styles.container}>
        <ShowIf condition={this.state.isLoading}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Bubbles size={10} color="#418ADB" />
          </View>
        </ShowIf>
        <ShowIf condition={!this.state.isLoading && this.state.data.length > 0}>
          <FlatList
            data={this.state.data}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderLoadMore}
            renderItem={this.renderItem}
            onEndReached={this.loadMore}
            onEndReachedThreshold={0}
          />
        </ShowIf>
        <ShowIf condition={!this.state.isLoading && this.state.data.length === 0}>
          <View style={styles.emptyData}>
            <MaterialIcons name="movie-filter" size={150} color="#A2A2A2" />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#414141'}}>No results found.</Text>
            <Text style={{color: '#A2A2A2', width: 270, textAlign: 'center', marginTop: 10, fontWeight: 'bold', fontSize: 16}}>We can not find any item matching your search.</Text>
          </View>
        </ShowIf>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ebee'
  },
  emptyData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
