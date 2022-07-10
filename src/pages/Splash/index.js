import React, {useEffect} from 'react';

import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch} from 'react-redux';

import logo from '../../assets/logo/logo.png';
import {loginUser} from '../../redux/actions';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToHome = () => {
    navigation.navigate('HomeTab');
  };
  const cekFirst = async () => {
    const is_first = await AsyncStorage.getItem('is_first');
    const is_login = await AsyncStorage.getItem('token');
    const email = await AsyncStorage.getItem('email');
    const pass = await AsyncStorage.getItem('password');
    // console.log('ini token:', valueJson);
    if (is_first && !!is_login) {
      // console.log
      // dispatch(
      //   loginUser({
      //     email: email,
      //     password: pass,
      //   }),
      // );
      navigateToHome();
      // dispatch({type: 'SUCCES_LOGIN', payload: valueJson});
    } else if (is_first) {
      navigateToLogin();
    } else {
      navigation.replace('Onboarding');
    }
  };

  // React.useEffect(() => {
  //   cekFirst();
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      //Harusnya Login
      cekFirst();
    }, 5000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View>
        <Image source={logo} style={{width: 110, height: 105}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33907C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
