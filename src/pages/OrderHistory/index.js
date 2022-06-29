import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import IconNav from '../../components/icon-navbar';
import cilok from '../../assets/image/cilok.jpg';
import ButtonGreen from '../../components/button-green';

const OrderHistory = () => {
  const Card = () => {
    return (
      <View
        style={{
          backgroundColor: '#FFF',
          height: 70,
          flexDirection: 'row',
          borderRadius: 10,
          padding: 10,
          marginBottom: 5,
        }}>
        <Image
          source={cilok}
          style={{
            height: '100%',
            width: '15%',
            borderRadius: 10,
            marginRight: 15,
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginRight: 15,
          }}>
          <Text style={{color: '#000'}}>Cilok</Text>
          <Text style={{color: '#33907C'}}>Rp 12.000,-</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <ButtonGreen judul="Kunjungi" p={25} l={100} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View style={{height: '10%', backgroundColor: '#33907C', padding: 20}}>
        <Text style={{fontSize: 25}}>Riwayat Penelusuran</Text>
      </View>
      <View style={{backgroundColor: '#E5E5E5', flex: 1}}>
        <View
          style={{
            height: '13%',
            backgroundColor: '#E5E5E5',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text style={{color: 'black', marginRight: 60, fontSize: 23}}>
            Riwayat
          </Text>
          <Text
            style={{
              color: '#33907C',
              backgroundColor: '#E6ECF0',
              borderRadius: 5,
              padding: 3,
              width: '27%',
              height: 27,
              textAlign: 'center',
            }}>
            Januari 2022
          </Text>
        </View>
        <ScrollView>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
      {/* <View style={styles.navBottom}>
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
          url={require('../../assets/Icon/store.png')}
          teks="Store"
          warna={'#4f4f4f'}
          linkk={() => alert('Jelajahi')}
        />
        <IconNav
          url={require('../../assets/Icon/order-active.png')}
          teks="History"
          warna={'#33907C'}
          linkk={() => alert('History')}
        />
        <IconNav
          url={require('../../assets/Icon/profile.png')}
          teks="Profil"
          warna={'#4f4f4f'}
          linkk={() => alert('Profile')}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default OrderHistory;

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
