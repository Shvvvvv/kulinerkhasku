import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import kembali from '../../assets/Icon/Back2.png';
import {tinggi, lebar} from '../../assets/style/Style';
import logo from '../../assets/logo/logo2.png';
import InputanWhite from '../../components/inputan-white';
import ButtonGreen from '../../components/button-green';
import {useNavigation} from '@react-navigation/native';
import {signupToko} from '../../redux/actions';

const validationSchema = Yup.object({
  nama: Yup.string()
    .trim()
    .min(3, 'Minimal harus 3 karakter!')
    .required('Nama tidak boleh kosong!'),
  namaToko: Yup.string()
    .trim()
    .min(3, 'Minimal harus 3 karakter!')
    .required('Tidak boleh kosong'),
  email: Yup.string()
    .trim()
    .email('Masukkan email dengan benar!')
    .required('Email tidak boleh kosong!'),
  noHp: Yup.number()
    .typeError('Masukkan nomor hp yang benar!')
    // .max(13, 'Maksimal 13 karakter!')
    // .min(10, 'Minimal 11 karakter!')
    .required('No Handphone tidak boleh kosong!'),
  password: Yup.string()
    .trim()
    .min(6, 'Minimal 6 karakter!')
    .required('Password tidak boleh kosong!'),
  repassword: Yup.string()
    .equals([Yup.ref('password'), null], 'Password tidak cocok!')
    .required('Tidak boleh kosong!'),
});
const SignupToko = ({navigation}) => {
  const Form = () => {
    const inputan = {
      nama: '',
      namaToko: '',
      email: '',
      noHp: '',
      password: '',
      repassword: '',
    };
    const dispatch = useDispatch();
    const statusRegister = useSelector(state => state.userReducer);
    const nav = useNavigation();
    useEffect(() => {
      console.log(statusRegister.tampToko);
    });
    const onSubmit = (nama, namaToko, email, noHp, password) => {
      const tamp = {
        nama: nama,
        namaToko: namaToko,
        email: email,
        noHp: noHp,
        password: password,
      };
      dispatch({type: 'NEXT_SIGNUP_TOKO', payload: tamp});
      nav.navigate('LanjutDaftarToko');
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Formik
          initialValues={inputan}
          validationSchema={validationSchema}
          onSubmit={(values, formikAction) => {
            setTimeout(() => {
              formikAction.resetForm();
              formikAction.setSubmitting(false);
              onSubmit(
                values.nama,
                values.namaToko,
                values.email,
                values.noHp,
                values.password,
              );
            }, 2000);
          }}>
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const {nama, namaToko, email, noHp, password, repassword} = values;
            return (
              <>
                <InputanWhite
                  onBlur={handleBlur('nama')}
                  error={touched.nama && errors.nama}
                  value={nama}
                  onChangeText={handleChange('nama')}
                  plcholder="Nama Lengkap"
                  clr="#33907C"
                  wid={lebar / 1.2}
                  mrginBot={10}
                />
                <InputanWhite
                  onBlur={handleBlur('namaToko')}
                  error={touched.namaToko && errors.namaToko}
                  value={namaToko}
                  onChangeText={handleChange('namaToko')}
                  plcholder="Nama Toko"
                  clr="#33907C"
                  wid={lebar / 1.2}
                  mrginBot={10}
                />
                <InputanWhite
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email}
                  value={email}
                  onChangeText={handleChange('email')}
                  plcholder="Email"
                  clr="#33907C"
                  wid={lebar / 1.2}
                  mrginBot={10}
                />
                <InputanWhite
                  onBlur={handleBlur('noHp')}
                  error={touched.noHp && errors.noHp}
                  value={noHp}
                  onChangeText={handleChange('noHp')}
                  plcholder="No Handphone"
                  clr="#33907C"
                  wid={lebar / 1.2}
                  mrginBot={10}
                />
                <InputanWhite
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password}
                  value={password}
                  onChangeText={handleChange('password')}
                  plcholder="Password"
                  clr="#33907C"
                  wid={lebar / 1.2}
                  mrginBot={10}
                  pass={true}
                />
                <InputanWhite
                  onBlur={handleBlur('repassword')}
                  error={touched.repassword && errors.repassword}
                  value={repassword}
                  onChangeText={handleChange('repassword')}
                  plcholder="Ulangi Password"
                  clr="#33907C"
                  wid={lebar / 1.2}
                  mrginBot={20}
                  pass={true}
                />
                <ButtonGreen
                  judul="Lanjut"
                  l={lebar / 1.2}
                  p={tinggi / 16}
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={{paddingHorizontal: 19, paddingVertical: 10}}>
          <Image source={kembali} style={{height: 25, width: 25}} />
        </View>
      </TouchableOpacity>

      <ScrollView>
        <Image
          source={logo}
          style={{
            height: 70,
            width: 70,
            alignSelf: 'center',
            marginTop: tinggi / 20,
            marginBottom: 13,
          }}
        />
        <Text style={[styles.text1]}>Daftar Toko</Text>
        <Text style={[styles.text2, {marginBottom: 25}]}>Buat Akun</Text>
        <Form />
        <View style={{paddingHorizontal: 30, marginTop: 30}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={styles.text2}>Sudah punya akun ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.textNav}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupToko;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    fontFamily: 'Monteserrat-SemiBold',
    fontSize: 24,
    color: '#33907C',
    textAlign: 'center',
  },
  text2: {
    color: '#33907C',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  textNav: {
    color: '#33907C',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
});
