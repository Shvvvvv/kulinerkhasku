import React, {useEffect, useState} from 'react';

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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const infodataUser = useSelector(state => state.userReducer);
  const nav = useNavigation();
  const [alamat, setAlamat] = useState('');
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
    const id = await AsyncStorage.getItem('idUser');
    const name = await AsyncStorage.getItem('name');
    const phone = await AsyncStorage.getItem('phone');
    const email = await AsyncStorage.getItem('email');
    const role = await AsyncStorage.getItem('role');
    const status = await AsyncStorage.getItem('status');
    const token = await AsyncStorage.getItem('token');
    const Addrs = await AsyncStorage.getItem('currentAddress');
    setUserx({
      id: id,
      name: name,
      phone: phone,
      email: email,
      role: role,
      status: status,
      token: token,
    });
    setAlamat(Addrs);
  };

  useEffect(() => {
    getAll();
    // console.log(userx);
  }, []);

  useEffect(() => {
    // console.log(userx);
  }, [userx]);

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
              {alamat}
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
            {userx?.name}
          </Text>
          <Text style={{color: 'black'}}>{userx?.phone}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{color: 'black'}}>
            {userx?.email}
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
