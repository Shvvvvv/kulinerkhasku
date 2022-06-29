import {GET_STORE_BY_ID} from '../types';

const initialState = {
  store: {},
};

const storeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE_BY_ID:
      return {
        ...state,
        store: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default storeReducers;
