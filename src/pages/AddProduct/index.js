import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {tinggi, lebar} from '../../assets/style/Style';
import kembali from '../../assets/Icon/Back.png';
import ButtonGreen from '../../components/button-green';
import close from '../../assets/Icon/Close.png';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import {useEffect} from 'react';
import cilok from '../../assets/image/cilok.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createProduct, getStoreById} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {Formik} from 'formik';

const AddProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const [img, setImg] = useState('');
  const [userx, setUserx] = useState('');
  const inputan = {
    productName: '',
    productType: '',
    price: '',
    productDescription: '',
    area: '',
  };

  function openGallery() {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(option, e => {
      if (e.didCancel) {
        console.log('Did Cancel');
      } else if (e.errorCode) {
        console.log(e.errorMessage);
      } else {
        const data = e.assets[0];
        setImg(data);
      }
    });
  }

  const validationSchema = Yup.object({
    productName: Yup.string()
      .trim()
      .min(3, 'Minimal 3 karakter!')
      .required('Nama product tidak boleh kosong!'),
    productType: Yup.string()
      .trim()
      .min(3, 'Minimal 3 karakter!')
      .required('Type produk tidak boleh kosong!'),
    price: Yup.string().min(4, 'Harap isi!').required('Harga harus di isi!'),
    productDescription: Yup.string()
      .trim()
      .min(20, 'Minimal 20 karakter!')
      .required('Tidak boleh kosong!'),
    area: Yup.string()
      .trim()
      .min(3, 'Minimal 3 karakter!')
      .required('Tidak boleh kosong!'),
  });

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

  const onSubmit = async val => {
    let param = {
      product_name: val.productName,
      price: val.price,
      description: val.productDescription,
      picture: img?.uri,
      store_id: userx.idToko,
      type_food: val.productType,
      area: val.area,
      status: 'Tersedia',
    };
    console.log(userx.token);
    await dispatch(createProduct(param, userx.token, navigation));
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {}, [img]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#33907C',
            height: tinggi / 13,
            flexDirection: 'row',
            paddingTop: 13,
          }}>
          <TouchableOpacity>
            <View style={{paddingLeft: 10}}>
              <Image source={kembali} style={{height: 25, width: 25}} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              left: lebar / 3.8,
            }}>
            Add Product
          </Text>
        </View>
        <Formik
          initialValues={inputan}
          validationSchema={validationSchema}
          onSubmit={(values, formikAction) => {
            setTimeout(() => {
              formikAction.resetForm();
              formikAction.setSubmitting(false);
              setImg('');
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
            const {productName, productType, price, productDescription, area} =
              values;
            return (
              <>
                <View
                  style={{
                    height: tinggi / 4,
                    backgroundColor: '#F6F9FF',
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '75%',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    {img ? (
                      <View
                        style={{
                          height: 105,
                          width: 140,
                          borderRadius: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <ImageBackground
                          source={{uri: img?.uri}}
                          style={{
                            height: '100%',
                            width: '100%',
                          }}
                          imageStyle={{borderRadius: 10}}>
                          <TouchableOpacity onPress={openGallery}>
                            <View
                              style={{
                                backgroundColor: '#FFFFFF80',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text
                                style={{color: '#4F4F4F', fontWeight: 'bold'}}>
                                Change photos
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                    ) : (
                      <TouchableOpacity onPress={openGallery}>
                        <View
                          style={{
                            height: 105,
                            width: 140,
                            borderWidth: 2,
                            borderStyle: 'dashed',
                            borderColor: '#4F4F4F',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={close}
                            style={{
                              transform: [{rotate: '45deg'}],
                              alignSelf: 'center',
                              marginBottom: 5,
                              height: 21,
                              width: 21,
                            }}
                          />
                          <Text style={{color: '#4F4F4F', fontWeight: 'bold'}}>
                            Add photos
                          </Text>
                          <Text style={{fontSize: 12, color: '#CCC'}}>
                            1600 x 1200 for hi res
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#F6F9FF',
                    flex: 1,
                    paddingHorizontal: 20,
                  }}>
                  <Text style={styles.teks}>Nama Produk</Text>
                  <TextInput
                    style={
                      styles(errors.productName && touched.productName).inputan
                    }
                    onBlur={handleBlur('productName')}
                    value={productName}
                    onChangeText={handleChange('productName')}
                  />
                  <Text style={styles.teks}>Type Produk</Text>
                  <TextInput
                    style={
                      styles(errors.productType && touched.productType).inputan
                    }
                    onBlur={handleBlur('productType')}
                    value={productType}
                    onChangeText={handleChange('productType')}
                  />
                  <Text style={styles.teks}>Harga</Text>
                  <TextInput
                    style={[
                      styles(errors.price && touched.price).inputan,
                      {width: 80},
                    ]}
                    onBlur={handleBlur('price')}
                    value={price}
                    onChangeText={handleChange('price')}
                  />
                  <Text style={styles.teks}>Deskripsi Produk</Text>
                  <TextInput
                    style={
                      styles(
                        errors.productDescription && touched.productDescription,
                      ).inputan
                    }
                    onBlur={handleBlur('productDescription')}
                    value={productDescription}
                    onChangeText={handleChange('productDescription')}
                  />
                  <Text style={styles.teks}>Area</Text>
                  <TextInput
                    style={styles(errors.area && touched.area).inputan}
                    onBlur={handleBlur('area')}
                    value={area}
                    onChangeText={handleChange('area')}
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
              </>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;

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
