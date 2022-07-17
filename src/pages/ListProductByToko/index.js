import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {set} from 'immer/dist/internal';
import React, {useEffect, useState} from 'react';

import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

import FontAwe5 from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

// import {} from 'react-native-gesture-handler';
import kembali from '../../assets/Icon/Back.png';
import cilok from '../../assets/image/cilok.jpg';
import ButtonGreen from '../../components/button-green';
import CardProduct from '../../components/card-product';
import {
  createReview,
  getAllProducts,
  getAllRating,
  getAllUser,
  getProductById,
  getStoreById,
  getTopRating,
} from '../../redux/actions';

const ListProductByToko = () => {
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
          store_id: store.id,
          user_id: userx.id,
          reviews: comment,
        },
        userx.token,
      ),
    );
    setComment('');
    await dispatch(getAllRating(userx.token));
  };

  useEffect(() => {
    async function get() {
      await getAll();
      await dispatch(getAllProducts(setLoad));
    }
    get();
  }, []);

  useEffect(() => {}, [comment]);

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
            source={{uri: store.picture1}}
            style={styles.imageCover}>
            <TouchableOpacity style={styles.buttonKembali}>
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
            <TouchableOpacity>
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
            <Text style={{color: 'white'}}>
              Jl. Dakota No.111 Kel.Sukaraja Kec. Cicendo Kota Bandung
            </Text>
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
                if (val.store_id === store.id) {
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
                val.store_id === store.id && (
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
                val.store_id === store.id && (
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
                        if (valUser.id === val.user_id) {
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
});
