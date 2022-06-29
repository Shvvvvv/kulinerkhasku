import {GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID} from '../types';

const initialState = {
  listProduct: [],
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        listProduct: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
