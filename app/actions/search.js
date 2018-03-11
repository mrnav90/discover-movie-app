import { ACTION_TYPES } from '../constants';

export function searchAll(keyword) {
  return {
    type: ACTION_TYPES.SEARCH_ALL,
    data: keyword
  };
}
