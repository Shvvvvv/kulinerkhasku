import React, {useEffect, useState} from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';

import map from '../../assets/Icon/Maps.png';
import notif from '../../assets/Icon/Notification.png';
import cilok from '../../assets/image/cilok.jpg';
import {lebar} from '../../assets/style/Style';
import ButtonGreen from '../../components/button-green';
import ButtonWhite from '../../components/button-white';
import ArtikelList from '../../components/card-list-artikel';
import CardProduct from '../../components/card-product';
import CR from '../../components/carousel';
import Searching from '../../components/machine-search';
import {getAllProducts} from '../../redux/actions';
import {getProductById, getStoreById} from '../../redux/actions/authAction';

const HomeDashboard = ({navigation}) => {
  const [userx, setUserx] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    role: '',
    status: '',
    token: '',
  });
  const [alamat, setAlamat] = useState('');
  const allProduct = useSelector(state => state.productReducer.listProduct);
  const nav = useNavigation();
  const user = useSelector(state => state.userReducer.dataUser.data);
  const dispatch = useDispatch();

  const navToDetailStore = async (idProduct, idStore) => {
    await dispatch(getProductById(idProduct, userx.token));
    await dispatch(getStoreById(idStore, userx.token));
    nav.navigate('DetailProduk', {idProduct: idProduct});
  };

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
      }
    });
    // const id = await AsyncStorage.getItem('idUser');
    // const name = await AsyncStorage.getItem('name');
    // const phone = await AsyncStorage.getItem('phone');
    // const email = await AsyncStorage.getItem('email');
    // const role = await AsyncStorage.getItem('role');
    // const status = await AsyncStorage.getItem('status');
    // const token = await AsyncStorage.getItem('token');
    const Addrs = await AsyncStorage.getItem('currentAddress');
    setAlamat(Addrs);
  };

  useEffect(() => {
    getAll();
    dispatch(getAllProducts());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.judul}>#KulinerKhasKu</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={notif} style={{width: 24, height: 24}} />
          </View>
        </View>
        <Searching goto="HasilPencarian" />
        <View
          style={{
            height: '23%',
            width: '95%',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: '33907C',
            alignSelf: 'center',
            marginTop: 11,
            alignItems: 'center',
            paddingHorizontal: 12,
            flexDirection: 'row',
          }}>
          <View style={{marginRight: 8}}>
            <Image source={map} style={{height: 20, width: 20}} />
          </View>
          <View>
            <Text style={{fontSize: 10, color: '#ccc'}}>
              Lokasi anda sekarang
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{color: 'white'}}>
              {alamat}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.konten}>
        <CR />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{fontSize: 18, color: '#4F4F4F'}}>Produk Baru</Text>
            <ButtonGreen l={120} p={30} judul="Lihat Semua" />
          </View>
          <View style={{paddingHorizontal: 10}}>
            <ScrollView
              horizontal
              style={{
                backgroundColor: 'white',
                maxWidth: lebar,
                height: 220,
              }}
              showsHorizontalScrollIndicator={false}>
              {allProduct.map(val => {
                return (
                  <CardProduct
                    key={val.id}
                    produkNama={val.product_name}
                    produkHarga={'Rp ' + val.price}
                    img={val.picture}
                    onPress={() => navToDetailStore(val.id, val.store_id)}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <Text style={{fontSize: 18, color: '#4F4F4F'}}>
            Rekomendasi Produk
          </Text>
          <ButtonGreen l={120} p={30} judul="Lihat Semua" />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <ScrollView
            horizontal
            style={{
              backgroundColor: 'white',
              maxWidth: lebar,
              height: 220,
            }}
            showsHorizontalScrollIndicator={false}>
            {allProduct.map(val => {
              return (
                <CardProduct
                  key={val.id}
                  produkNama={val.product_name}
                  produkHarga={'Rp ' + val.price}
                  img={val.picture}
                  onPress={() => navToDetailStore(val.id, val.store_id)}
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDashboard;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  header: {
    backgroundColor: '#33907C',
    width: lebar,
    height: 170,
    flexDirection: 'column',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 29,
    paddingVertical: 20,
  },
  konten: {backgroundColor: '#FFFFFF', flex: 1},
  navBottom: {
    backgroundColor: '#eee',
    width: lebar,
    height: 55,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  judul: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  containerCard: {marginHorizontal: 5},
});
