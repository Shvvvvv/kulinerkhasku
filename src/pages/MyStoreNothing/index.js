import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import IconNav from '../../components/icon-navbar';
import ButtonGreen from '../../components/button-green';

const MyStoreNothing = () => {
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
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 40,
          }}>
          Kamu tidak memiliki toko
        </Text>
        <ButtonGreen judul="Buat Toko" p={45} l={210} />
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

export default MyStoreNothing;

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
});
