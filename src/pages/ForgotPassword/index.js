import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import logo from '../../assets/logo/logo2.png';
import {lebar} from '../../assets/style/Style';
import ButtonGreen from '../../components/button-green';
import InputanWhite from '../../components/inputan-white';

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flex: 4,
          justifyContent: 'center',
        }}>
        <Image source={logo} style={{width: 100, height: 80}} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 26,
            color: '#33907C',
            marginVertical: 10,
          }}>
          #KulinerKhasKu
        </Text>
        <Text
          style={{
            textAlign: 'center',
            width: '80%',
            fontSize: 16,
            marginBottom: 10,
            color: '#33907C',
          }}>
          Silahkan masukkan email kamu untuk mendapatkan verifikasi perubahan
          password kamu.
        </Text>
        <InputanWhite
          wid={lebar / 1.3}
          plcholder="Email"
          clr={'#33907C'}
          mrginBot={20}
        />
        <ButtonGreen l={lebar / 1.3} p={40} judul="Ubah Password" />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, color: '#33907C'}}>
          Kembali ke halaman{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#33907C',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
