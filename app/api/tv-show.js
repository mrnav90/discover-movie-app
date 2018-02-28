import reduxAPI from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import { API_URL, API_KEY } from '../constants';

export default reduxAPI({
  airing_today: {
    url: `tv/airing_today?api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  on_the_air: {
    url: `tv/on_the_air?api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  popular_tv: {
    url: `tv/popular?api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  top_rated_tv: {
    url: `tv/top_rated?api_key=${API_KEY}`,
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
