import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const discoverMiddleware = createReactNavigationReduxMiddleware('discover', state => state.discoverNavigation);
const movieMiddleware = createReactNavigationReduxMiddleware('movie', state => state.movieNavigation);
const peopleMiddleware = createReactNavigationReduxMiddleware('people', state => state.peopleNavigation);
const tvshowMiddleware = createReactNavigationReduxMiddleware('tv-show', state => state.tvshowNavigation);
const tvshowListener = createReduxBoundAddListener('tv-show');
const discoverListener = createReduxBoundAddListener('discover');
const peopleListener = createReduxBoundAddListener('people');
const movieListener = createReduxBoundAddListener('movie');

const store = createStore(rootReducer, applyMiddleware(discoverMiddleware, movieMiddleware, peopleMiddleware, tvshowMiddleware));

export { store, tvshowListener, discoverListener, peopleListener, movieListener };
