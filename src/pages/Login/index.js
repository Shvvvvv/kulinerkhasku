import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useDispatch, useSelector} from 'react-redux';

import {Formik} from 'formik';
import * as Yup from 'yup';

import logo from '../../assets/logo/logo2.png';
import {lebar, tinggi} from '../../assets/style/Style';
import ButtonGreen from '../../components/button-green';
import Button from '../../components/button-light-semibold';
import InputanWhite from '../../components/inputan-white';
import {loginUser} from '../../redux/actions';

const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email('Email harus valid!')
    .required('Email harus diisi!'),
  password: Yup.string().trim().required('Password harus diisi!'),
});

const Form = () => {
  const inputData = {
    email: '',
    password: '',
  };
  const nav = useNavigation();
  const dispatch = useDispatch();
  const infoDataUser = useSelector(state => state.userReducer);
  useEffect(() => {
    if (infoDataUser.dataUser.status) {
      nav.navigate('HomeTab');
    }
  }, [infoDataUser]);

  const onSubmit = (email, password) => {
    // setAct(!act);
    dispatch(
      loginUser({
        email: email,
        password: password,
      }),
    );
  };
  return (
    <View style={{width: lebar / 1.2}}>
      <Formik
        initialValues={inputData}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          setTimeout(() => {
            formikAction.resetForm();
            formikAction.setSubmitting(false);
            onSubmit(values.email, values.password);
          }, 1000);
        }}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          isSubmitting,
          handleSubmit,
        }) => {
          const {email, password} = values;
          return (
            <>
              <InputanWhite
                onBlur={handleBlur('email')}
                error={touched.email && errors.email}
                value={email}
                pass={false}
                clr="#33907C"
                plcholder="Email ID/ No Handphone"
                mrginBot={10}
                onChangeText={handleChange('email')}
              />
              <InputanWhite
                onBlur={handleBlur('password')}
                error={touched.password && errors.password}
                value={password}
                pass={true}
                clr="#33907C"
                plcholder="Password"
                mrginBot={30}
                onChangeText={handleChange('password')}
              />
              <ButtonGreen
                judul="Login"
                p={48}
                l={lebar / 1.2}
                submitting={isSubmitting}
                onPress={() => handleSubmit()}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const Login = ({navigation}) => {
  let [show, setShow] = useState(false);
  const [act, setAct] = useState(false);
  const loginState = useSelector(state => state.LoginReducer);

  const Popup = () => {
    return (
      <SafeAreaView>
        <Modal visible={show} animationType="slide" transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <TouchableHighlight
              underlayColor="#ddd"
              onPress={() => setShow(!show)}>
              <View
                style={{
                  height: tinggi / 25,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {height: 15, width: 0},
                  shadowOpacity: 5,
                  elevation: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#ddd',
                    width: lebar / 2,
                    height: 5,
                    borderRadius: 50,
                  }}></View>
              </View>
            </TouchableHighlight>
            <View
              style={{
                height: tinggi / 5.3,
                backgroundColor: '#33907C',
                justifyContent: 'space-around',
                paddingVertical: 10,
                alignItems: 'center',
              }}>
              <Button
                teks="Pengunjung"
                link={() => {
                  navigation.navigate('SignupPelancong');
                  setShow(false);
                }}
              />
              <Button
                teks="Toko"
                link={() => {
                  navigation.navigate('SignupToko');
                  // navigation.navigate('LanjutDaftarToko');
                  setShow(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.text1}>#KulinerKhasKu</Text>
        <Text style={[styles.text2, {marginBottom: 45}]}>
          Ayo login dengan akun mu
        </Text>
        <Form />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.text2, {marginTop: 32.5}]}>Lupa password ?</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text2, {marginTop: 45.5}]}>
            Belum punya akun?{' '}
          </Text>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Text
              style={{
                color: '#33907C',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 16,
                marginTop: 45.5,
              }}>
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
        <Popup />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: tinggi / 15,
  },
  text1: {
    fontSize: 24,
    color: '#33907C',
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 66,
  },
  text2: {
    fontSize: 16,
    color: '#33907C',
    fontFamily: 'Montserrat-Regular',
  },
  inputEmail: {
    borderColor: '#33907C',
    borderWidth: 1,
    borderRadius: 100,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 20,
    fontSize: 18,
    marginBottom: 16,
    maxWidth: lebar / 1.2,
    width: lebar / 1.2,
    color: '#33907C',
  },
  image: {
    width: 90,
    height: 85,
    marginBottom: 10,
  },
  button: {
    maxHeight: tinggi / 6,
    height: tinggi / 16,
    maxWidth: lebar / 1.2,
    width: lebar / 1.2,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
