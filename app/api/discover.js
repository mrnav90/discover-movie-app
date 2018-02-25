import reduxAPI from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import { API_URL, API_KEY } from '../constants';

export default reduxAPI({
  movie: {
    url: `discover/movie?api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  tv: {
    url: `discover/tv?api_key=${API_KEY}`,
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
