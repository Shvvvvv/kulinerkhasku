import axios from 'axios';
import {useDispatch} from 'react-redux';
import {dispatch} from 'rxjs/internal/observable/pairs';
import {GET_ALL_PRODUCTS} from '../types';

export const signUpUser = param => dispatch => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/register_user',
      {
        name: param.name,
        email: param.email,
        phone: param.phone,
        password: param.password,
      },
    )
    .then(result => {
      console.log(result.data);
      dispatch({type: 'SUCCESS_REGISTER_USER', payload: result.data});
    })
    .catch(error => {
      console.log('Error');
      console.log(error);
    });
};

export const loginUser = param => dispatch => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/user/login',
      param,
    )
    .then(result => {
      dispatch({type: 'SUCCES_LOGIN', payload: result.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const doLogoutUser = param => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/user/logout',
      param,
    )
    .then(result => {
      console.log('');
    })
    .catch(error => {
      console.log('');
    });
};

export const signupToko = param => dispatch => {
  axios
    .post(
      'https://kulinerkhasku21.000webhostapp.com/public/api/register_store_owner',
      param,
    )
    .then(result => {
      dispatch({type: 'SUCCESS_REGISTER_TOKO', payload: result.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const getAllProducts = () => dispatch => {
  axios
    .get('https://kulinerkhasku21.000webhostapp.com/public/api/product')
    .then(result => {
      console.log(result.data.data);
      dispatch({type: 'GET_ALL_PRODUCTS', payload: result.data.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const getProductById = id => dispatch => {
  axios
    .get('https://kulinerkhasku21.000webhostapp.com/public/api/product/' + id)
    .then(result => {
      dispatch({type: 'GET_PRODUCT_BY_ID', payload: result.data.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const getStoreById = id => dispatch => {
  axios
    .get('https://kulinerkhasku21.000webhostapp.com/public/api/store/' + id)
    .then(result => {
      dispatch({type: 'GET_STORE_BY_ID', payload: result.data.data});
    })
    .catch(error => {
      console.log(error);
    });
};
