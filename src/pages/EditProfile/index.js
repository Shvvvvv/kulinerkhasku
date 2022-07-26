import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {tinggi, lebar} from '../../assets/style/Style';
import kembali from '../../assets/Icon/Back.png';
import ButtonGreen from '../../components/button-green';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateUser} from '../../redux/actions';

const validationSchema = Yup.object({
  nama: Yup.string()
    .trim()
    .min(3, 'Miminal harus 3 karakter!')
    .required('Nama tidak boleh kosong!'),
  noHp: Yup.string().required('No Handphone Tidak Boleh Kosong!'),
});

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const [userx, setUserx] = useState('');
  const inputan = {
    nama: '',
    noHp: '',
  };

  const onSubmit = async val => {
    let param = {
      name: val.nama,
      email: userx.email,
      password: '',
      phone: val.noHp,
    };
    await dispatch(updateUser(param, userx.id, userx.token, navigation));
  };

  const getAll = async () => {
    await AsyncStorage.getItem('dataLogin', (error, result) => {
      if (result) {
        let data = JSON.parse(result);
        setUserx({
          id: data.id,
          token: data.token,
          email: data.email,
        });
      }
    });
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <Formik
        initialValues={inputan}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          setTimeout(() => {
            formikAction.resetForm();
            formikAction.setSubmitting(false);
            onSubmit(values);
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
          const {nama, noHp} = values;
          return (
            <>
              <View style={{flex: 1}}>
                <View
                  style={{
                    backgroundColor: '#33907C',
                    height: tinggi / 10,
                    flexDirection: 'row',
                    paddingTop: 13,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <View style={{paddingLeft: 10}}>
                      <Image source={kembali} style={{height: 25, width: 25}} />
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      left: lebar / 6.5,
                    }}>
                    Ubah profil baru anda
                  </Text>
                </View>
                <ScrollView
                  style={{
                    backgroundColor: '#F6F9FF',
                    flex: 1,
                    paddingVertical: 30,
                    paddingHorizontal: 25,
                  }}>
                  <Text style={styles().teks}>Nama</Text>
                  <TextInput
                    style={styles(errors.nama && touched.nama).inputan}
                    onBlur={handleBlur('nama')}
                    value={nama}
                    onChangeText={handleChange('nama')}
                  />
                  <Text style={styles().teks}>No Handphone</Text>
                  <TextInput
                    style={styles(errors.noHp && touched.noHp).inputan}
                    onBlur={handleBlur('noHp')}
                    value={noHp}
                    onChangeText={handleChange('noHp')}
                  />
                </ScrollView>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: tinggi / 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,

                    elevation: 9,
                  }}>
                  <ButtonGreen
                    judul="Simpan"
                    p={45}
                    l={lebar / 1.2}
                    submitting={isSubmitting}
                    onPress={() => handleSubmit()}
                  />
                  <View
                    style={{
                      height: 3,
                      width: 200,
                      backgroundColor: '#E5E5E5',
                      borderRadius: 50,
                      marginTop: 10,
                    }}></View>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = error =>
  StyleSheet.create({
    teks: {
      color: '#999',
      marginTop: 20,
    },
    inputan: {
      borderBottomWidth: 1,
      borderColor: error ? 'red' : '#ccc',
      color: '#000',
      height: 35,
      // backgroundColor: 'pink',
      padding: 0,
    },
  });
