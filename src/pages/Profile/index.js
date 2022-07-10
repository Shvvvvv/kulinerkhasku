import React, {useEffect} from 'react';

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useSelector} from 'react-redux';

import map from '../../assets/Icon/Maps.png';
import ButtonGreen from '../../components/button-green';
import IconNav from '../../components/icon-navbar';

const Profile = () => {
  const infodataUser = useSelector(state => state.userReducer);
  const nav = useNavigation();
  console.log('xxx', infodataUser);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#33907C',
        }}>
        <Text
          style={{
            color: 'white',
            marginBottom: 30,
            marginTop: 20,
            left: 13,
            fontSize: 20,
          }}>
          Profile
        </Text>
        <View
          style={{
            height: '13%',
            width: '95%',
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            marginTop: 11,
            alignItems: 'center',
            paddingHorizontal: 12,
            flexDirection: 'row',
            alignSelf: 'center',
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
              Jl. Dakota No. 8a Sukaraja Bandung, Jawa Barat, Indonesia
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: '25%',
          width: '80%',
          backgroundColor: '#FFF',
          left: '10%',
          top: '34%',
          position: 'absolute',
          borderRadius: 10,
          zIndex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
        }}>
        <View
          style={{
            height: 110,
            width: 110,
            borderRadius: 100,
            backgroundColor: 'black',
            marginRight: 20,
          }}></View>
        <View style={{width: '50%'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {infodataUser.dataUser.data.name}
          </Text>
          <Text style={{color: 'black'}}>
            {infodataUser.dataUser.data.phone}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{color: 'black'}}>
            {infodataUser.dataUser.data.email}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#E5E5E5',
          zIndex: 1,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            marginBottom: '10%',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '30%',
            width: '100%',
          }}>
          <ButtonGreen
            judul="Edit Profile"
            p={45}
            l={300}
            link={() => {
              nav.navigate('EditProfile');
            }}
          />
          <ButtonGreen judul="Logout" p={45} l={300} />
        </View>
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
          url={require('../../assets/Icon/order.png')}
          teks="History"
          warna={'#4f4f4f'}
          linkk={() => alert('History')}
        />
        <IconNav
          url={require('../../assets/Icon/profile-active.png')}
          teks="Profil"
          warna={'#33907C'}
          linkk={() => alert('Profile')}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default Profile;

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
