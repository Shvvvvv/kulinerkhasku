import React, {useEffect, useRef, useState} from 'react';

import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-date-picker';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
import MapView, {AnimatedRegion, MarkerAnimated} from 'react-native-maps';

import {Formik} from 'formik';

import kembali from '../../assets/Icon/Back2.png';
import carii from '../../assets/Icon/carii.png';
import close from '../../assets/Icon/Close.png';
import nav from '../../assets/Icon/Icon.png';
import camera from '../../assets/Icon/Vector.png';
import maps from '../../assets/image/bg-map.png';
import {lebar, tinggi} from '../../assets/style/Style';
import ButtonGreen from '../../components/button-green';
import Button from '../../components/button-light-semibold';

const LanjutDaftarToko = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [singleFile, setSingleFile] = useState('');
  //changed from useState to useRef
  const mapRef = useRef(null);
  const [myMarker, setMyMarker] = useState(null);
  const [coordinate, setCoordinate] = useState(
    new AnimatedRegion({
      latitude: 107.57147742604502,
      longitude: -6.894428621193786,
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
    }),
  );

  const uploadImage = async () => {
    if (singleFile != null) {
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
    }
  };

  const cropImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSingleFile(image);
      console.log(image.path);
    });
  };

  const setCurrentCoordinate = async () => {
    const coordLat = await AsyncStorage.getItem('latitude');
    const coordLong = await AsyncStorage.getItem('longitude');
    const num1 = Number(coordLat);
    const num2 = Number(coordLong);
    let newCoordinate = {
      latitude: num1,
      longitude: num2,
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
    };
    //camera will position itself to these coordinates.
    const newCamera = {
      center: {
        latitude: num1,
        longitude: num2,
      },
      pitch: 0,
      heading: 0,
      //zoom: 17  --Use it when required
    };

    if (myMarker) {
      myMarker.animateMarkerToCoordinate(newCoordinate, 2000);
      //camera type, `newCamera`, used inside animateCamera
      mapRef.current.animateCamera(newCamera, {duration: 2000});
    }
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log('res :' + JSON.stringify(res));
      setSingleFile(res);
      console.log(singleFile);
    } catch (err) {
      setSingleFile(null);
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

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
              <Button teks="Buka Berkas" link={cropImage} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    console.log(mapRef);
    console.log(myMarker);
    setCurrentCoordinate();
  }, [mapRef, myMarker, setCurrentCoordinate]);
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
        <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
          <Text style={{color: '#33907C'}}>Upload foto lokasi</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            {!!singleFile ? (
              <View style={styles.imageInput}>
                {console.log('Masuk 2')}
                <TouchableOpacity
                  onPress={() => {
                    setShow(!show);
                  }}>
                  <Image source={singleFile} style={styles.camera} />
                  <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.imageInput}>
                {console.log('Masuk 1')}
                <TouchableOpacity
                  onPress={() => {
                    setShow(!show);
                  }}>
                  <Image source={camera} style={styles.camera} />
                  <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.imageInput}>
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                }}>
                <Image source={camera} style={styles.camera} />
                <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageInput}>
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                }}>
                <Image source={camera} style={styles.camera} />
                <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{color: '#33907C'}}>
            Pastikan kamu mengambil foto dari berbagai sudut pandang
          </Text>
          {/* {singleFile != null ? (
            <Text style={{color: 'red'}}>
              File Name: {singleFile[0].name ? singleFile[0].name : ''}
              {'\n'}
              Type: {singleFile[0].type ? singleFile[0].type : ''}
              {'\n'}
              File Size: {singleFile[0].size ? singleFile[0].size : ''}
              {'\n'}
              URI: {singleFile[0].uri ? singleFile[0].uri : ''}
              {'\n'}
            </Text>
          ) : null} */}
          {/* <Formik
            initialValues={inputan}
            validationSchema={validationSchema}
            onSubmit={(values, formikAction) => {
              setTimeout(() => {
                formikAction.resetForm();
                formikAction.setSubmitting(false);
                onSubmit(values.alamat, values.deskripsi);
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
              const {alamat, deskripsi} = values;
            }}
            <TextInput
              multiline={true}
              placeholder="Alamat lengkap"
              placeholderTextColor="#33907C"
              style={{
                borderWidth: 1,
                borderRadius: 16,
                borderColor: '#33907C',
                marginTop: 40,
                height: tinggi / 5,
                color: '#33907C',
                padding: 20,
                textAlignVertical: 'top',
              }}
            />
            <TextInput
              multiline={true}
              placeholder="Deskripsi Toko"
              placeholderTextColor="#33907C"
              style={{
                borderWidth: 1,
                borderRadius: 16,
                borderColor: '#33907C',
                marginTop: 40,
                height: tinggi / 5,
                color: '#33907C',
                padding: 20,
                textAlignVertical: 'top',
              }}
            />
          </Formik> */}

          <Text style={{color: '#33907C', marginTop: 35, marginBottom: 15}}>
            Jam Buka
          </Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode="time"
            androidVariant="nativeAndroid"
            textColor="#33907C"
            locale="id"
          />
          <Text style={{color: '#33907C', marginTop: 35, marginBottom: 15}}>
            Jam Tutup
          </Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode="time"
            androidVariant="nativeAndroid"
            textColor="#33907C"
            locale="id"
          />
          <Text style={{color: '#33907C', marginTop: 35, marginBottom: 15}}>
            Lokasi toko kamu
          </Text>
          <ImageBackground
            source={maps}
            imageStyle={{borderRadius: 10}}
            style={{
              height: 150,
              padding: 30,
              marginBottom: 50,
            }}>
            <Text style={{color: 'black'}}>
              Tandai lokasi kamu dalam peta agar memudahkan layanan navigasi
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderRadius: 7,
                  borderColor: '#33907C',
                  padding: 5,
                  maxWidth: 170,
                  marginTop: 15,
                }}>
                <Image
                  source={nav}
                  style={{height: 20, width: 20, marginRight: 5}}
                />
                <Text style={{color: '#33907C'}}>Tandai alamat kamu</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{alignSelf: 'center'}}>
            <ButtonGreen judul="Daftar" p={40} l={lebar / 1.3} />
          </View>
        </View>
        <Modal
          transparent
          visible={isModalVisible}
          statusBarTranslucent={true}
          animationType="slide">
          <View
            style={{
              flex: 1,
              backgroundColor: '#00000050',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: lebar,
                height: tinggi / 1.03,
                backgroundColor: 'white',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 60,
                  position: 'relative',
                }}>
                <Text style={{color: 'black'}}>Lokasi toko kamu</Text>
                <View style={{position: 'absolute', right: 15}}>
                  <TouchableOpacity onPress={toggleModal}>
                    <Image
                      source={close}
                      style={{height: 24, width: 24}}></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  padding: 20,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#CBCBCC',
                }}>
                <View
                  style={{
                    backgroundColor: '#F5F2FC',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 10,
                    paddingHorizontal: 10,
                  }}>
                  <TextInput
                    style={{
                      flex: 1,
                      color: 'black',
                      marginRight: 3,
                    }}
                  />
                  <Image source={carii} style={{height: 30, width: 30}} />
                </View>
                <View
                  style={{
                    backgroundColor: 'pink',
                    height: tinggi / 1.5,
                    marginTop: 10,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MapView
                    ref={mapRef} //There is also change here
                    style={styles.map}
                    initialRegion={{
                      latitude: -6.894428621193786,
                      longitude: 107.57147742604502,
                      latitudeDelta: 0.012,
                      longitudeDelta: 0.012,
                    }}
                    //These are newly added
                    pitchEnabled={false}
                    zoomEnabled={false}>
                    <MarkerAnimated
                      ref={marker => {
                        setMyMarker(marker);
                      }}
                      image={require('../../assets/logo/logoMap.png')}
                      coordinate={coordinate}
                      style={{width: 20, height: 20}}
                    />
                  </MapView>
                </View>
              </View>
              <View style={{padding: 20}}>
                {/* <TouchableOpacity
                    onPress={() => animateMarkerAndCamera()}
                    style={[styles.bubble, styles.button]}
                >
                    <Text>Animate</Text>
                </TouchableOpacity> */}
                <ButtonGreen
                  judul="Gunakan lokasi ini"
                  p={40}
                  onPress={setCurrentCoordinate}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <Popup />
    </SafeAreaView>
  );
};

export default LanjutDaftarToko;

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
    marginTop: 45.5,
  },
  imageInput: {
    width: lebar / 2.5,
    height: tinggi / 5,
    backgroundColor: '#F5F2FC',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#33907C',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {width: 50, height: 50, marginBottom: 15, alignSelf: 'center'},
  map: {
    width: lebar / 1.1,
    height: tinggi / 1.5,
  },
});
