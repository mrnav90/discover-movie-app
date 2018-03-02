import { ACTION_TYPES } from '../constants';

export function searchScreen(data) {
  return {
    type: ACTION_TYPES.SEARCH_MOVIE_SCREEN,
    data: data
  };
}
