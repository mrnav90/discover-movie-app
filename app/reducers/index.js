import { combineReducers } from 'redux';
import discover from './discover';
import movie from './movie';
import people from './people';
import tvshow from './tv-show';
import tabbar from './tabbar';
import search from './search';

export default combineReducers({
  tabbar,
  search,
  discoverNavigation: discover,
  movieNavigation: movie,
  peopleNavigation: people,
  tvshowNavigation: tvshow
});
