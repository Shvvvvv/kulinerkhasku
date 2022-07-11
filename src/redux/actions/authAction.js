import AsyncStorage from '@react-native-async-storage/async-storage';
import {Easing, Notifier, NotifierComponents} from 'react-native-notifier';

import axios from 'axios';

import {API_KULINER} from '../../config';

export const signUpUser = param => dispatch => {
  axios
    .post(API_KULINER + 'api/register_user', {
      name: param.name,
      email: param.email,
      phone: param.phone,
      password: param.password,
    })
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
    .post(API_KULINER + 'api/user/login', param)
    .then(async result => {
      // console.log(result.data.data.token);
      console.log(result.data);
      if (result.data.status) {
        Notifier.showNotification({
          title: 'Login gagal',
          description: result.data.message,
          duration: 3000,
          showAnimationDuration: 800,
          hideAnimationDuration: 800,
          animationDuration: 800,
          showEasing: Easing.in,
          // hideOnPress: false,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'success',
          },
        });
        dispatch({type: 'SUCCES_LOGIN', payload: result.data});
        // await AsyncStorage.mergeItem(
        //   'idUser',
        //   JSON.stringify(result.data.data.id),
        // );
        // await AsyncStorage.mergeItem('name', result.data.data.name);
        // await AsyncStorage.mergeItem('phone', result.data.data.phone);
        // await AsyncStorage.mergeItem('email', result.data.data.email);
        // await AsyncStorage.mergeItem('role', result.data.data.role);
        // await AsyncStorage.mergeItem('status', result.data.data.status);
        // await AsyncStorage.mergeItem('token', result.data.data.token);
      } else {
        Notifier.showNotification({
          title: 'Login gagal',
          description: result.data.message,
          duration: 3000,
          showAnimationDuration: 800,
          hideAnimationDuration: 800,
          animationDuration: 800,
          showEasing: Easing.in,
          // hideOnPress: false,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
      }

      // dispatch({type: 'SUCCES_LOGIN', payload: result.data});
    })
    .catch(error => {
      // console.log('Putri');
      console.log(error);
    });
};

export const reloginUser = param => dispatch => {
  axios
    .post(API_KULINER + 'api/user/login', param)
    .then(async result => {
      dispatch({type: 'SUCCES_LOGIN', payload: result.data});
    })
    .catch(error => {
      // console.log('Putri');
      console.log(error);
    });
};

export const doLogoutUser = param => {
  axios
    .post(API_KULINER, param)
    .then(result => {
      console.log('');
    })
    .catch(error => {
      console.log('');
    });
};

export const signupToko = param => dispatch => {
  axios
    .post(API_KULINER, param)
    .then(result => {
      dispatch({type: 'SUCCESS_REGISTER_TOKO', payload: result.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const getAllProducts = () => dispatch => {
  axios
    .get(API_KULINER + 'api/product')
    .then(result => {
      console.log(result.data.data);
      dispatch({type: 'GET_ALL_PRODUCTS', payload: result.data.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const getProductById = (id, token) => dispatch => {
  axios
    .get(API_KULINER + 'api/product/' + id, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(result => {
      dispatch({type: 'GET_PRODUCT_BY_ID', payload: result.data.data});
    })
    .catch(error => {
      console.log('Ggl');
      console.log(error);
    });
};

export const getStoreById = (id, token) => dispatch => {
  axios
    .get(
      'https://hashtagkulinerkhasku.000webhostapp.com/public/api/store/' + id,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    )
    .then(result => {
      dispatch({type: 'GET_STORE_BY_ID', payload: result.data.data});
    })
    .catch(error => {
      console.log('gagal');
      console.log(error);
    });
};
