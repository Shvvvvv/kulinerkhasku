import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import kembali from '../../assets/Icon/Back.png';
import {lebar, tinggi} from '../../assets/style/Style';
import ButtonGreen from '../../components/button-green';

const DetailProduk = ({navigation}) => {
  // const [product, setProduct] = useState('');
  // const [store, setStore] = useState('');
  const produk = useSelector(state => state.productReducer.product);
  const toko = useSelector(state => state.storeReducers.store);

  // const getProduct = async () => {
  //   await AsyncStorage.getItem('product', (error, result) => {
  //     if (result) {
  //       let data = JSON.parse(result);
  //       console.log(data);
  //       setProduct({
  //         productName: data.product_name,
  //         price: data.price,
  //         picture: data.picture,
  //         description: data.description,
  //         typeFood: data.type_food,
  //         area: data.area,
  //         status: data.status,
  //       });
  //     }
  //   });
  // };

  // const getStore = async () => {
  //   await AsyncStorage.getItem('store', (error, result) => {
  //     if (result) {
  //       let data = JSON.parse(result);
  //       setStore({
  //         id: data.id,
  //         storeName: data.store_name,
  //       });
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getProduct();
  //   getStore();
  // }, []);

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
            <Image
              source={kembali}
              style={{height: 35, width: 35, top: 5, marginLeft: 10}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{height: 225, width: '100%'}}>
          <ImageBackground
            source={{uri: produk.picture}}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <View style={styles.containerProduk}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            {produk.product_name}
          </Text>
          <Text style={{color: '#33907C', fontSize: 18, fontWeight: 'bold'}}>
            {'Rp ' + produk.price + ',-'}
          </Text>
        </View>
        <View style={styles.containerToko}>
          <Text style={{color: 'black', fontSize: 18}}>{toko.store_name}</Text>
          <ButtonGreen
            p={30}
            l={110}
            judul="Kunjungi"
            submitting={false}
            link={() => navigation.navigate('ListProductByToko')}
          />
        </View>
        <View style={styles.containerDeskripsi}>
          <Text style={styles.txtDesk}>Deskripsi Produk</Text>
          <Text style={{color: 'black'}}>{produk.description}</Text>
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
            <Text style={styles.teks}>{': ' + produk.area}</Text>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Text style={[styles.teks, {marginRight: 56}]}>Kategori </Text>
            <Text style={styles.teks}>{': ' + produk.type_food}</Text>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Text style={[styles.teks, {marginRight: 68}]}>Status </Text>
            <Text style={styles.teks}>{': ' + produk.status}</Text>
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
