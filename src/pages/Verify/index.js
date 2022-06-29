import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import done from '../../assets/Icon/Done.png';
import kembali from '../../assets/Icon/Back.png';
import ButtonLBR from '../../components/button-light-basic-regular';
import {useNavigation} from '@react-navigation/native';

const Verify = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <TouchableOpacity>
        <View style={{paddingHorizontal: 19, paddingVertical: 5}}>
          <Image source={kembali} style={{height: 24, width: 24}} />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={done} style={{width: 244.32, height: 159}} />
          <Text style={[styles.teks1, {marginTop: 51}]}>
            Verifikasi akun kamu
          </Text>
          <Text style={[styles.teks2, {marginTop: 51}]}>
            Kami telah mengirim email verifikasi ke
          </Text>
          <Text style={styles.teks2}>
            email kamu, yuk aktifkan akunmu sekarang
          </Text>
          <ButtonLBR
            teks="Next"
            mrgTop={108}
            link={() => {
              nav.navigate('Login');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verify;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#33907C'},
  container: {
    backgroundColor: '#33907C',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 66,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  teks1: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
  teks2: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    textAlign: 'center',
  },
});
