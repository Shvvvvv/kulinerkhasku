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
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import Geocoder from 'react-native-geocoder';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import MapView, {AnimatedRegion, MarkerAnimated} from 'react-native-maps';

import {useDispatch, useSelector} from 'react-redux';

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
import {signUpStore} from '../../redux/actions';
import {dateToTime} from '../../utils/convert';

const LanjutDaftarToko = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dateOpen, setDateOpen] = useState(new Date());
  const [dateClosed, setDateClosed] = useState(new Date());
  const [show, setShow] = useState(false);
  const {dataToko} = useSelector(state => state.userReducer);
  const [singleFile, setSingleFile] = useState(null);
  const [singleFile1, setSingleFile1] = useState(null);
  const [singleFile2, setSingleFile2] = useState(null);
  const dispatch = useDispatch();
  const nav = useNavigation();
  const [area, setArea] = useState(null);
  const [myAddress, setMyAddress] = useState(null);
  const {tampToko} = useSelector(state => state.userReducer);
  const [coordinate, setCoordinate] = useState(
    new AnimatedRegion({
      latitude: 107.57147742604502,
      longitude: -6.894428621193786,
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
    }),
  );

  const [region, setRegion] = useState({
    mapRegion: null,
    latitude: -6.894428621193786,
    longitude: 107.57147742604502,
  });

  const onRegionChange = (region, latitude, longitude) => {
    setRegion({
      mapRegion: region,
      // If there are no new values set the current ones
      latitude: latitude || region.latitude,
      longitude: longitude || region.longitude,
    });

    Geocoder.geocodePosition({
      lat: region.latitude,
      lng: region.longitude,
    }).then(results => {
      let result = results[0];
      setArea(result.adminArea);
      console.log(result);
    });
  };

  const uploadData = async () => {
    if (singleFile != null && singleFile1 != null && singleFile2 != null) {
      const fileToUpload = singleFile;
      const data = new FormData();
      // data.append('name', 'Image Upload');
      data.append('name', tampToko.nama);
      data.append('email', tampToko.email);
      data.append('phone', tampToko.noHp);
      data.append('password', tampToko.password);
      data.append('store_name', tampToko.namaToko);
      data.append('address', myAddress);
      data.append('latitude', region.latitude);
      data.append('longitude', region.longitude);
      data.append('description', '-');
      data.append('picture1', {
        name: singleFile.path.replace(
          'file:///storage/emulated/0/Android/data/com.tokomakanankhas/files/Pictures/',
          '',
        ),
        type: singleFile.mime,
        uri: singleFile.path,
      });
      data.append('picture2', {
        name: singleFile1.path.replace(
          'file:///storage/emulated/0/Android/data/com.tokomakanankhas/files/Pictures/',
          '',
        ),
        type: singleFile1.mime,
        uri: singleFile1.path,
      });
      data.append('picture3', {
        name: singleFile2.path.replace(
          'file:///storage/emulated/0/Android/data/com.tokomakanankhas/files/Pictures/',
          '',
        ),
        type: singleFile2.mime,
        uri: singleFile2.path,
      });
      data.append('phone_store', tampToko.noHp);
      data.append('open_time', dateToTime(dateOpen));
      data.append('close_time', dateToTime(dateClosed));
      dispatch(signUpStore(data));
    }
  };

  const cropImage = () => {
    // setShow(!show);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSingleFile(image);
      console.log(image.path);
    });
  };

  const cropImage1 = () => {
    // setShow(!show);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSingleFile1(image);
      console.log(image.path);
    });
  };

  const cropImage2 = () => {
    // setShow(!show);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSingleFile2(image);
      console.log(image.path);
    });
  };

  const setCurrentCoordinate = async () => {
    Geocoder.geocodePosition({
      lat: region.latitude,
      lng: region.longitude,
    }).then(results => {
      let result = results[0];
      let address = result.formattedAddress;
      setMyAddress(address);
      toggleModal();
    });
  };

  useEffect(() => {
    console.log('ini ya ?', dataToko);
    if (dataToko.status) {
      dispatch({
        type: 'SUCCESS_REGISTER_USER',
        payload: {status: false, message: '', data: []},
      });
      nav.navigate('Verify');
    }
  }, [dataToko, dispatch, nav]);

  // useEffect(() => {
  //   console.log(singleFile);
  // }, [singleFile]);

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
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={{paddingHorizontal: 19, paddingTop: tinggi / 38}}>
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
                <TouchableOpacity onPress={cropImage}>
                  {/* {console.log(singleFile)} */}
                  <Image
                    source={{uri: `${singleFile.path}`}}
                    style={styles.images}
                  />
                  {/* <Text style={{color: '#ACADAE'}}>Max file 2mb</Text> */}
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.imageInput}>
                {/* {console.log('Masuk 1')} */}
                <TouchableOpacity onPress={cropImage}>
                  <Image source={camera} style={styles.camera} />
                  <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
                </TouchableOpacity>
              </View>
            )}

            {!!singleFile1 ? (
              <View style={styles.imageInput}>
                {/* {console.log('Masuk 2')} */}
                <TouchableOpacity onPress={cropImage1}>
                  {/* {console.log(singleFile1)} */}
                  <Image
                    source={{uri: `${singleFile1.path}`}}
                    style={styles.images}
                  />
                  {/* <Text style={{color: '#ACADAE'}}>Max file 2mb</Text> */}
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.imageInput}>
                {/* {console.log('Masuk 1')} */}
                <TouchableOpacity onPress={cropImage1}>
                  <Image source={camera} style={styles.camera} />
                  <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
                </TouchableOpacity>
              </View>
            )}
            {!!singleFile2 ? (
              <View style={styles.imageInput}>
                {/* {console.log('Masuk 2')} */}
                <TouchableOpacity onPress={cropImage2}>
                  {/* {console.log(singleFile1)} */}
                  <Image
                    source={{uri: `${singleFile1.path}`}}
                    style={styles.images}
                  />
                  {/* <Text style={{color: '#ACADAE'}}>Max file 2mb</Text> */}
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.imageInput}>
                {/* {console.log('Masuk 1')} */}
                <TouchableOpacity onPress={cropImage2}>
                  <Image source={camera} style={styles.camera} />
                  <Text style={{color: '#ACADAE'}}>Max file 2mb</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <Text style={{color: '#33907C'}}>
            Pastikan kamu mengambil foto dari berbagai sudut pandang
          </Text>

          <Text style={{color: '#33907C', marginTop: 35, marginBottom: 15}}>
            Jam Buka
          </Text>
          <DatePicker
            date={dateOpen}
            onDateChange={setDateOpen}
            mode="time"
            androidVariant="nativeAndroid"
            textColor="#33907C"
            locale="id"
            is24hourSource="locale"
          />
          <Text style={{color: '#33907C', marginTop: 35, marginBottom: 15}}>
            Jam Tutup
          </Text>
          <DatePicker
            date={dateClosed}
            onDateChange={setDateClosed}
            mode="time"
            androidVariant="nativeAndroid"
            textColor="#33907C"
            locale="id"
            is24hourSource="locale"
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
              {myAddress === null
                ? `Tandai lokasi kamu dalam peta agar memudahkan layanan navigasi`
                : myAddress}
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
          {area === 'Jawa Barat' ||
          area === 'West Java' ||
          area === null ? null : (
            <View style={{marginBottom: 14}}>
              <Text style={{color: 'red'}}>
                Maaf Area yang anda pilih diluar jangkauan. Aplikasi hanya
                mendukung area Jawa Barat saja
              </Text>
            </View>
          )}
          <View style={{alignSelf: 'center'}}>
            <ButtonGreen
              judul="Daftar"
              p={40}
              l={lebar / 1.3}
              disable={
                area === 'Jawa Barat' || area === 'West Java' ? false : true
              }
              onPress={uploadData}
            />
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
                height: tinggi / 1.1,
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
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 22}}>
                  Lokasi toko kamu
                </Text>
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
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#CBCBCC',
                  marginTop: 10,
                  paddingHorizontal: 10,
                  height: 50,
                }}>
                {/* <GooglePlacesAutocomplete
                  predefinedPlacesAlwaysVisible={true}
                  placeholder="Enter Location"
                  minLength={2}
                  autoFocus={false}
                  fetchDetails
                  listViewDisplayed="auto"
                  query={{
                    key: 'AIzaSyDLgNPsDb1iKk09vm1qAhyJWpR03TZMbD0',
                    language: 'id',
                    types: 'geocode',
                  }}
                  currentLocation={false}
                  onPress={(data, details = null) => {
                    const region = {
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      latitudeDelta: 0.00922 * 1.5,
                      longitudeDelta: 0.00421 * 1.5,
                    };
                    onRegionChange(region, region.latitude, region.longitude);
                  }}
                /> */}
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
                    backgroundColor: 'gray',
                    height: tinggi / 1.8,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MapView
                    // style={{ flex: 1, width: window.width }
                    // region={region.mapRegion}
                    // onRegionChange={regions => {
                    //   setRegion({mapRegion: regions});
                    //   console.log('ini region', regions);
                    // }}
                    style={styles.map}
                    initialRegion={{
                      latitude: -6.894428621193786,
                      longitude: 107.57147742604502,
                      latitudeDelta: 0.012,
                      longitudeDelta: 0.012,
                    }}
                    onPress={e => {
                      const region = {
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                        latitudeDelta: 0.00922 * 1.5,
                        longitudeDelta: 0.00421 * 1.5,
                      };
                      console.log('ini on press', e.nativeEvent.coordinate);
                      onRegionChange(region, region.latitude, region.longitude);
                    }}>
                    <MarkerAnimated
                      image={require('../../assets/logo/logoMap.png')}
                      coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                      }}
                      style={{width: 20, height: 20}}
                      title="Lokasi toko kamu"
                      description="Tandai lokasi toko kamu dengan akurat ya"
                    />
                  </MapView>
                </View>
              </View>
              <View style={{padding: 20, height: tinggi / 10, flex: 1}}>
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
  images: {width: 150, height: 135, alignSelf: 'center', borderRadius: 10},
  map: {
    width: lebar / 1.1,
    height: tinggi / 1.8,
  },
});
