import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import notif from '../../assets/Icon/Notification.png';
import Searching from '../../components/machine-search';
import CardProduct from '../../components/card-product';
import sort from '../../assets/Icon/Sort.png';
import map from '../../assets/Icon/Maps.png';
import cate from '../../assets/Icon/Category.png';
import {useDispatch, useSelector} from 'react-redux';
import {lebar} from '../../assets/style/Style';
import cari from '../../assets/Icon/pencarian.png';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProductById, getStoreById} from '../../redux/actions';

const Produk = () => {
  const [carii, setCari] = useState('');
  const sortProduk = [];
  const allProduct = useSelector(state => state.productReducer.listProduct);
  const dispatch = useDispatch();
  const nav = useNavigation();
  const [userx, setUserx] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    role: '',
    status: '',
    token: '',
  });

  allProduct.map(val => {
    if (val.product_name.toLowerCase().indexOf(carii.toLowerCase()) === -1) {
      return;
    } else {
      sortProduk.push(val);
    }
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
      }
    });
  };

  const navToDetailStore = async (idProduct, idStore) => {
    await dispatch(getProductById(idProduct, userx.token));
    await dispatch(getStoreById(idStore, userx.token));
    nav.navigate('DetailProduk');
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.judul}>#KulinerKhasKu</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={notif} style={{width: 24, height: 24}} />
          </View>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image
              source={cari}
              style={{width: 24, height: 24, marginRight: 12}}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Cari Makanan"
            placeholderTextColor="#7f7f7f"
            style={styles.inputan}
            value={carii}
            onChangeText={val => {
              setCari(val);
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={styles.button}>
            <Image
              source={sort}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text style={{color: 'white'}}>Sort by</Text>
          </View>
          <View style={styles.button}>
            <Image
              source={map}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text style={{color: 'white'}}>Lokasi</Text>
          </View>
          <View style={styles.button}>
            <Image
              source={cate}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text style={{color: 'white'}}>Kategori</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.konten}>
        <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          {sortProduk.map(val => {
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Produk;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#33907C',
    width: '100%',
    height: 170,
    flexDirection: 'column',
  },
  konten: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  navBottom: {
    backgroundColor: '#eee',
    width: '100%',
    height: 55,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
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
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 29,
    paddingVertical: 20,
  },
  judul: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    height: 35,
    width: '30%',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 15,
    width: lebar / 1.1,
    alignSelf: 'center',
    height: 40,
  },
  inputan: {
    color: '#4F4F4F',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    width: lebar / 1.4,
  },
});
