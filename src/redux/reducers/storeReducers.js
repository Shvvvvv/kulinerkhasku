import {GET_RATING_STORE, GET_STORE_BY_ID} from '../types';

const initialState = {
  store: {},
  rating: [],
  topRating: [],
};

const storeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE_BY_ID:
      return {
        ...state,
        store: action.payload,
      };
    case GET_RATING_STORE:
      return {
        ...state,
        rating: action.payload,
      };
    case 'GET_TOP_RATING':
      return {
        ...state,
        topRating: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default storeReducers;
