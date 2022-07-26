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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {getStoreById} from '../../redux/actions';

const validationSchema = Yup.object({
  store_name: Yup.string()
    .trim()
    .min(3, 'Miminal harus 3 karakter!')
    .required('Nama tidak boleh kosong!'),
  description: Yup.string()
    .trim()
    .min(20, 'Minimal harus 20 karakter!')
    .required('Nama tidak boleh kosong!'),
  address: Yup.string()
    .trim()
    .min(20, 'Minimal harus 20 karakter!')
    .required('Nama tidak boleh kosong!'),
  phone_store: Yup.string().required('No Handphone Tidak Boleh Kosong!'),
});

const EditStore = ({navigation}) => {
  const dispatch = useDispatch();
  const [userx, setUserx] = useState('');
  const inputan = {
    store_name: '',
    address: '',
    phone_store: '',
    description: '',
  };

  const onSubmit = async val => {
    let param = {
      id: userx.idToko,
      store_name: val.store_name,
      address: val.addres,
      phone_store: val.phone,
      open_time: userx.openTime,
      close_time: userx.closeTime,
      picture1: userx.picture1,
      picture2: userx.picture2,
      picture3: userx.picture3,
      description: val.description,
    };
    await dispatch(param, userx.token, navigation);
  };

  const getAll = async () => {
    await AsyncStorage.getItem('dataLogin', (error, result) => {
      if (result) {
        let data = JSON.parse(result);
        setUserx({
          id: data.id,
          token: data.token,
          namaToko: data.store.stores.store_name,
          idToko: data.store.stores.id,
          openTime: data.store.stores.open_time,
          closeTime: data.store.stores.close_time,
          picture1: data.store.stores.picture1,
          picture2: data.store.stores.picture2,
          picture3: data.store.stores.picture3,
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
          const {store_name, address, phone, description} = values;
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
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{paddingLeft: 10}}>
                      <Image source={kembali} style={{height: 25, width: 25}} />
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      left: lebar / 4.3,
                    }}>
                    Ubah toko anda
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#F6F9FF',
                    flex: 1,
                    paddingHorizontal: 20,
                  }}>
                  <Text style={styles().teks}>Nama Toko</Text>
                  <TextInput
                    style={
                      styles(errors.store_name && touched.store_name).inputan
                    }
                    onBlur={handleBlur('store_name')}
                    value={store_name}
                    onChangeText={handleChange('store_name')}
                  />
                  <Text style={styles().teks}>Deskripsi Toko</Text>
                  <TextInput
                    style={
                      styles(errors.description && touched.description).inputan
                    }
                    onBlur={handleBlur('description')}
                    value={description}
                    onChangeText={handleChange('description')}
                  />
                  <Text style={styles().teks}>Alamat</Text>
                  <TextInput
                    style={styles(errors.address && touched.address).inputan}
                    onBlur={handleBlur('address')}
                    value={address}
                    onChangeText={handleChange('address')}
                  />
                  <Text style={styles().teks}>Phone</Text>
                  <TextInput
                    style={styles(errors.phone && touched.phone).inputan}
                    onBlur={handleBlur('phone')}
                    value={phone}
                    onChangeText={handleChange('phone')}
                  />
                </View>
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

export default EditStore;

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
