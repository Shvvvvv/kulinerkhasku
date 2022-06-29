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
import React from 'react';
import {tinggi, lebar} from '../../assets/style/Style';
import kembali from '../../assets/Icon/Back.png';
import ButtonGreen from '../../components/button-green';
import * as Yup from 'yup';
import {Formik} from 'formik';

const validationSchema = Yup.object({
  nama: Yup.string()
    .trim()
    .min(3, 'Miminal harus 3 karakter!')
    .required('Nama tidak boleh kosong!'),
  noHp: Yup.string().required('No Handphone Tidak Boleh Kosong!'),
  alamat: Yup.string()
    .trim()
    .min(3, 'Miminal harus 3 karakter!')
    .required('Nama tidak boleh kosong!'),
  kota: Yup.string()
    .trim()
    .min(3, 'Miminal harus 3 karakter!')
    .required('Nama tidak boleh kosong!'),
  negara: Yup.string()
    .trim()
    .min(3, 'Miminal harus 3 karakter!')
    .required('Nama tidak boleh kosong!'),
  kodePos: Yup.string()
    .trim()
    .min(3, 'Miminal harus 3 karakter!')
    .max(5, 'Maksimal harus 5 karakter!')
    .required('Nama tidak boleh kosong!'),
});

const EditProfile = ({navigation}) => {
  const inputan = {
    nama: '',
    noHp: '',
    alamat: '',
    kota: '',
    negara: '',
    kodePos: '',
  };

  // const onSubmit = (val) => {
  //   dispatch(updateUser(val));
  // };

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
            // onSubmit(values);
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
          const {nama, noHp, alamat, kota, negara, kodePos} = values;
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
                    Ubah alamat baru anda
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
                  <Text style={styles().teks}>Alamat</Text>
                  <TextInput
                    style={styles(touched.alamat && errors.alamat).inputan}
                    onBlur={handleBlur('alamat')}
                    value={alamat}
                    onChangeText={handleChange('alamat')}
                  />
                  <Text style={styles().teks}>Kota</Text>
                  <TextInput
                    style={styles(touched.kota && errors.kota).inputan}
                    onBlur={handleBlur('kota')}
                    value={kota}
                    onChangeText={handleChange('kota')}
                  />
                  <Text style={styles().teks}>Negara</Text>
                  <TextInput
                    style={styles(touched.negara && errors.negara).inputan}
                    onBlur={handleBlur('negara')}
                    value={negara}
                    onChangeText={handleChange('negara')}
                  />
                  <Text style={styles().teks}>Kode Pos</Text>
                  <TextInput
                    style={styles(touched.kodePos && errors.kodePos).inputan}
                    onBlur={handleBlur('kodePos')}
                    value={kodePos}
                    onChangeText={handleChange('kodePos')}
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
