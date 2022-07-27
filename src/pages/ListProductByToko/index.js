import React, {useEffect, useState} from 'react';

import {
  Button,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import MapView, {MarkerAnimated} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {AirbnbRating, Rating} from 'react-native-ratings';
import FontAwe5 from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';

import {set} from 'immer/dist/internal';

// import {} from 'react-native-gesture-handler';
import kembali from '../../assets/Icon/Back.png';
import cilok from '../../assets/image/cilok.jpg';
import {lebar, tinggi} from '../../assets/style/Style';
import ButtonGreen from '../../components/button-green';
import CardProduct from '../../components/card-product';
import {GOOGLE_MAPS_APIKEY} from '../../config';
import {
  createReview,
  createView,
  getAllProducts,
  getAllRating,
  getAllUser,
  getProductById,
  getStoreById,
  getTopRating,
} from '../../redux/actions';

const ListProductByToko = ({route}) => {
  if (route.params) {
    var {idToko} = route.params;
  }
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(true);
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(0);
  const store = useSelector(state => state.storeReducers.store);
  const allProduct = useSelector(state => state.productReducer.listProduct);
  const allRating = useSelector(state => state.storeReducers.rating);
  const topRating = useSelector(state => state.storeReducers.topRating);
  const allUser = useSelector(state => state.userReducer.allUser);
  const nav = useNavigation();
  const dispatch = useDispatch();
  const [initRegion, setIniitRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.012,
    longitudeDelta: 0.012,
  });
  const [userx, setUserx] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    role: '',
    status: '',
    token: '',
  });

  const getAll = async () => {
    let lat = await AsyncStorage.getItem('latitude');
    let long = await AsyncStorage.getItem('longitude');
    console.log('lat nya ada ?', lat);
    setIniitRegion({
      latitude: Number(lat),
      longitude: Number(long),
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
    });
    await AsyncStorage.getItem('dataLogin', (error, result) => {
      if (result) {
        let data = JSON.parse(result);
        setUserx({
          id: data.id,
          name: data.name,
          phone: data.phone,
          email: data.email,
          role: data.role,
          status: data.status,
          token: data.token,
        });
        dispatch(getAllRating(data.token));
        dispatch(getAllUser(data.token));
        dispatch(getTopRating(data.token));
        dispatch(getStoreById(idToko, data.token));
        dispatch(createView({store_id: idToko, user_id: data.id}, data.token));
      }
    });
  };

  const navToDetailStore = async (idProduct, idStore) => {
    await dispatch(getProductById(idProduct, userx.token));
    await dispatch(getStoreById(idStore, userx.token));
    nav.navigate('DetailProduk');
  };

  function ratingCompleted(rating) {
    setRate(rating);
  }

  const handleKlik = async () => {
    await dispatch(
      createReview(
        {
          rating: rate,
          store_id: idToko,
          user_id: userx.id,
          reviews: comment,
        },
        userx.token,
      ),
    );
    setComment('');
    await dispatch(getAllRating(userx.token));
    await dispatch(getTopRating(userx.token));
  };

  useEffect(() => {
    async function get() {
      await getAll();
      await dispatch(getAllProducts(setLoad));
    }
    get();
    console.log('test');
  }, []);

  useEffect(() => {}, [allRating, topRating]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <ScrollView>
        <View style={styles.mainContainer}>
          <ImageBackground
            source={{
              uri: store?.picture1,
            }}
            style={styles.imageCover}>
            <TouchableOpacity
              style={styles.buttonKembali}
              onPress={() => nav.goBack()}>
              <View>
                <Image source={kembali} style={{height: 30, width: 30}} />
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.containerLokasi}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#33907C',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => setShow(!show)}>
              <View style={styles.containerAlamat}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}>
                  Cek Lokasi
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#33907C',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', marginBottom: 5}}>Alamat: </Text>
            <Text style={{color: 'white'}}>{store.address}</Text>
          </View>
        </View>
        <View
          style={{
            height: 65,
            flexDirection: 'row',
            padding: 8,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              backgroundColor: '#33907C',
              width: '40%',
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>Rating Toko</Text>
            <Text style={{fontSize: 16, color: 'gold'}}>
              {topRating.map(val => {
                if (val.store_id == store.id) {
                  return val.rating;
                }
              })}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              backgroundColor: '#33907C',
              width: '40%',
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>
              Jumlah Pengunjung
            </Text>
            <Text style={{fontSize: 16, color: 'gold'}}>450</Text>
          </View>
        </View>
        <ScrollView style={{height: 450}} nestedScrollEnabled>
          <View style={styles.containerProduk}>
            {allProduct.map(val => {
              return (
                val.store_id == store.id && (
                  <CardProduct
                    key={val.id}
                    produkNama={val.product_name}
                    produkHarga={'Rp ' + val.price}
                    img={val.picture}
                    onPress={() => navToDetailStore(val.id, val.store_id)}
                  />
                )
              );
            })}
          </View>
        </ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            }}>
            <Text style={{color: 'black', marginBottom: 5}}>
              Berikan penilaianmu setelah mengunjungi toko
            </Text>
            <Rating
              defaultRating={1}
              imageSize={25}
              showRating={false}
              onFinishRating={ratingCompleted}
            />
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: '#33907C',
                width: '90%',
                height: 100,
                borderRadius: 20,
                textAlignVertical: 'top',
                color: '#33907C',
                padding: 15,
                marginTop: 10,
              }}
              multiline
              placeholder="Tulis penilaianmu disini..."
              placeholderTextColor={'#33907C'}
              value={comment}
              onChangeText={value => setComment(value)}
            />
            <ButtonGreen
              l={150}
              p={30}
              judul="Berikan Komentar"
              marginTop={10}
              submitting={false}
              link={handleKlik}
            />
          </View>
        </View>
        <ScrollView nestedScrollEnabled>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            {allRating.map(val => {
              return (
                val.store_id == store.id && (
                  <View
                    key={val.id}
                    style={{
                      padding: 10,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginBottom: 7,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginBottom: 3,
                      }}>
                      {allUser.map(valUser => {
                        if (valUser.id == val.user_id) {
                          return valUser.name;
                        }
                      })}
                    </Text>
                    <AirbnbRating
                      defaultRating={val.rating}
                      size={17}
                      showRating={false}
                      isDisabled
                      starContainerStyle={{
                        width: '100%',
                        justifyContent: 'flex-start',
                        marginBottom: 3,
                      }}
                    />
                    <Text>{val.reviews}</Text>
                  </View>
                )
              );
            })}
          </View>
        </ScrollView>
      </ScrollView>
      <Modal
        transparent
        visible={show}
        statusBarTranslucent={true}
        animationType="slide">
        {console.log('ini store', store)}
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
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 22}}>
                Lokasi toko
              </Text>
              <View style={{position: 'absolute', right: 15}}>
                {/* <TouchableOpacity onPress={toggleModal}>
                  <Image source={close} style={{height: 24, width: 24}}></Image>
                </TouchableOpacity> */}
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
              }}></View>
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
                <MapView initialRegion={initRegion} style={styles.map}>
                  <MapViewDirections
                    origin={{
                      latitude: initRegion.latitude,
                      longitude: initRegion.longitude,
                    }}
                    destination={{
                      latitude: Number(store.latitude),
                      longitude: Number(store.longitude),
                    }}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="#33907C"
                  />
                  <MarkerAnimated
                    image={require('../../assets/logo/logoMap.png')}
                    coordinate={{
                      latitude: Number(store.latitude),
                      longitude: Number(store.longitude),
                    }}
                    style={{width: 20, height: 20}}
                    title="Lokasi toko"
                    description={store.address}
                  />
                  <MarkerAnimated
                    // image={require('../../assets/logo/logoMap.png')}
                    coordinate={{
                      latitude: initRegion.latitude,
                      longitude: initRegion.longitude,
                    }}
                    style={{width: 20, height: 20}}
                    title="Lokasi toko"
                    description={store.address}
                  />
                </MapView>
              </View>
            </View>
            <View style={{padding: 20, height: tinggi / 10, flex: 1}}>
              <ButtonGreen judul="Kembali" p={40} link={() => setShow(!show)} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ListProductByToko;

const styles = StyleSheet.create({
  mainContainer: {height: '20%', width: '100%'},
  imageCover: {flex: 1, paddingVertical: 35, paddingHorizontal: 15},
  buttonKembali: {
    backgroundColor: '#FFFFFF70',
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLokasi: {
    height: '10%',
    backgroundColor: '#33907C',
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  containerAlamat: {
    borderWidth: 1,
    height: 40,
    width: 150,
    alignSelf: 'center',
    borderRadius: 50,
    borderColor: 'white',
    justifyContent: 'center',
  },
  containerProduk: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  map: {
    width: lebar / 1.1,
    height: tinggi / 1.8,
  },
});
