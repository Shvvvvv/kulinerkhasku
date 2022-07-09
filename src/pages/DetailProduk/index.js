import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import ButtonGreen from '../../components/button-green';
import kembali from '../../assets/Icon/Back.png';
import cilok from '../../assets/image/cilok.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {getProductById, getStoreById} from '../../redux/actions/authAction';

const DetailProduk = ({navigation, route}) => {
  const {idProduct} = route.params;
  const product = useSelector(state => state.productReducer.product);
  const store = useSelector(state => state.storeReducers.store);
  const user = useSelector(state => state.userReducer.dataUser.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(idProduct, user.token));
    dispatch(getStoreById(product.store_id, user.token));
    console.log('PutriM');
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View
        style={{
          backgroundColor: '#00000050',
          width: '100%',
          height: '6%',
          position: 'absolute',
          zIndex: 2,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View>
            <Image source={kembali} style={{height: 35, width: 35, top: 5}} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{height: 225, width: '100%'}}>
          <ImageBackground
            source={{uri: product.picture}}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <View style={styles.containerProduk}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            {product.product_name}
          </Text>
          <Text style={{color: '#33907C', fontSize: 18, fontWeight: 'bold'}}>
            {'Rp ' + product.price + ',-'}
          </Text>
        </View>
        <View style={styles.containerToko}>
          <Text style={{color: 'black', fontSize: 18}}>{store.store_name}</Text>
          <ButtonGreen p={30} l={110} judul="Kunjungi" />
        </View>
        <View style={styles.containerDeskripsi}>
          <Text style={styles.txtDesk}>Deskripsi Produk</Text>
          <Text style={{color: 'black'}}>{product.description}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.txtDesk}>Informasi Produk</Text>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Text
              style={[
                styles.teks,
                {
                  marginRight: 80,
                },
              ]}>
              Area{' '}
            </Text>
            <Text style={styles.teks}>{': ' + product.area}</Text>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Text style={[styles.teks, {marginRight: 56}]}>Kategori </Text>
            <Text style={styles.teks}>{': ' + product.type_food}</Text>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Text style={[styles.teks, {marginRight: 68}]}>Status </Text>
            <Text style={styles.teks}>{': ' + product.status}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({
  containerProduk: {
    height: 95,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 8,
    justifyContent: 'center',
  },
  containerToko: {
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDeskripsi: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 26,
  },
  txtDesk: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  containerInfo: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
  },
  teks: {
    color: 'black',
    marginBottom: 5,
    fontSize: 16,
  },
  backk: {
    borderRadius: 50,
    backgroundColor: '#ccc',
    height: 37,
    width: 37,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '3%',
    top: '3%',
  },
});
