import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IconNav from '../../components/icon-navbar';
import ButtonGreen from '../../components/button-green';
import toko from '../../assets/Icon/iconStore.png';
import ButtonWhite from '../../components/button-white';
import {lebar} from '../../assets/style/Style';

const MyStoreNothingProduct = () => {
  const ButtonW = props => {
    return (
      <SafeAreaView>
        <TouchableOpacity>
          <View style={[styles.button, {height: props.p, width: props.l}]}>
            <Text style={styles.tex}>{props.judul}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <View
        style={{
          backgroundColor: '#33907C',
          height: '12%',
          paddingHorizontal: 13,
          paddingVertical: 20,
        }}>
        <Text style={{fontSize: 23, color: 'white'}}>My Store</Text>
      </View>
      <View
        style={{
          backgroundColor: '#E5E5E5',
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            alignItems: 'center',
          }}>
          <Image
            source={toko}
            style={{height: 65, width: 80, marginBottom: 8, marginTop: 15}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Toko Khas Ku
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 230,
              marginBottom: 23,
            }}>
            <ButtonW judul="Edit toko" l={105} p={25} />
            <ButtonGreen judul="Lihat info" l={105} p={25} />
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: '#CCC',
                height: 35,
                width: lebar,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: '#AAA'}}>
                Hapus toko
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{flex: 2, backgroundColor: '#E5E5E5', alignItems: 'center'}}>
          <Text
            style={{
              width: lebar / 1.5,
              fontSize: 20,
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              marginTop: 60,
              marginBottom: 37,
            }}>
            Kamu belum mempunyai produk!
          </Text>
          <ButtonW judul="Tambah Produk" l={lebar / 1.5} p={45} />
        </View>
      </View>
      <View style={styles.navBottom}>
        <IconNav
          url={require('../../assets/Icon/home.png')}
          teks="Home"
          warna={'#4f4f4f'}
          linkk={() => alert('Home')}
        />
        <IconNav
          url={require('../../assets/Icon/search.png')}
          teks="Jelajahi"
          warna={'#4f4f4f'}
          linkk={() => alert('Jelajahi')}
        />
        <IconNav
          url={require('../../assets/Icon/store-active.png')}
          teks="Store"
          warna={'#33907C'}
          linkk={() => alert('Jelajahi')}
        />
        <IconNav
          url={require('../../assets/Icon/order.png')}
          teks="History"
          warna={'#4f4f4f'}
          linkk={() => alert('History')}
        />
        <IconNav
          url={require('../../assets/Icon/profile.png')}
          teks="Profil"
          warna={'#4f4f4f'}
          linkk={() => alert('Profile')}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyStoreNothingProduct;

const styles = StyleSheet.create({
  navBottom: {
    backgroundColor: '#eee',
    width: '100%',
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
  tex: {
    textAlign: 'center',
    color: '#33907C',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#33907C',
  },
});
