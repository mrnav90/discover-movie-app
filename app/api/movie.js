import reduxAPI from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import { API_URL, API_KEY } from '../constants';

export default reduxAPI({
  now_playing: {
    url: `movie/now_playing?api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  popular: {
    url: `movie/popular?api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  top_rated: {
    url: `movie/top_rated?api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  upcoming: {
    url: `movie/upcoming?api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
})
.use('fetch', adapterFetch(fetch))
.use('rootUrl', API_URL);
