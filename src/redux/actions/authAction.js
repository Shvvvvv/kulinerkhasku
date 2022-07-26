import AsyncStorage from '@react-native-async-storage/async-storage';
import {Easing, Notifier, NotifierComponents} from 'react-native-notifier';

import axios from 'axios';

import {API_KULINER} from '../../config';

//USER
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
      console.log(error.response.data);
    });
};

export const loginUser = param => dispatch => {
  axios
    .post(API_KULINER + 'api/user/login', param)
    .then(async result => {
      if (result.data.status) {
        Notifier.showNotification({
          title: 'Login Berhasill',
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
        dispatch({type: 'SUCCES_LOGIN', payload: result.data.data});
        const jsonValue = JSON.stringify(result.data.data);
        console.log(jsonValue);
        await AsyncStorage.setItem('dataLogin', jsonValue);
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
    })
    .catch(error => {
      console.log(error);
    });
};

// export const reloginUser = param => dispatch => {
//   axios
//     .post(API_KULINER + 'api/user/login', param)
//     .then(async result => {
//       dispatch({type: 'SUCCES_LOGIN', payload: result.data});
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

export const doLogoutUser = (token, nav) => {
  axios
    .get(API_KULINER + 'api/user/logout', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(result => {
      AsyncStorage.clear();
      nav.replace('Login');
    })
    .catch(error => {
      console.log('');
    });
};

export const getAllUser = token => dispatch => {
  axios
    .get(API_KULINER + 'api/user', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(result => {
      dispatch({type: 'GET_ALL_USER', payload: result.data.data});
    })
    .catch(error => {
      console.log(error);
    });
};

//PRODUCT
export const getAllProducts = setLoad => dispatch => {
  axios
    .get(API_KULINER + 'api/product')
    .then(result => {
      setLoad(false);
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
    .then(async result => {
      dispatch({type: 'GET_PRODUCT_BY_ID', payload: result.data.data});
      await AsyncStorage.mergeItem('product', JSON.stringify(result.data.data));
    })
    .catch(error => {
      console.log(error);
    });
};

//STORE
export const signUpStore = param => dispatch => {
  console.log(param);
  axios
    .post(API_KULINER + 'api/register_store_owner', param, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(result => {
      console.log(result.data);
      dispatch({type: 'SUCCESS_REGISTER_TOKO', payload: result.data});
    })
    .catch(error => {
      console.log('Error');
      console.log(error);
    });
};
export const getStoreById = (id, token) => dispatch => {
  axios
    .get(API_KULINER + 'api/store/' + id, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(async result => {
      dispatch({type: 'GET_STORE_BY_ID', payload: result.data.data});
      await AsyncStorage.mergeItem('store', JSON.stringify(result.data.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const getAllRating = token => dispatch => {
  axios
    .get(API_KULINER + 'api/rating/rating_store', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(result => {
      dispatch({type: 'GET_RATING_STORE', payload: result.data.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const getTopRating = token => dispatch => {
  axios
    .get(API_KULINER + 'api/rating/top_rating_store', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(result => {
      dispatch({type: 'GET_TOP_RATING', payload: result.data.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export const createReview = (param, token) => dispatch => {
  axios
    .post(API_KULINER + 'api/rating/create_rating_store', param, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(result => {
      Notifier.showNotification({
        title: 'Review',
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
    })
    .catch(error => {
      console.log(error);
    });
};
