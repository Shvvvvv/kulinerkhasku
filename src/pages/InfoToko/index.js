import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {tinggi, lebar} from '../../assets/style/Style';
import kembali from '../../assets/Icon/Back.png';
import ButtonGreen from '../../components/button-green';
import iconStore from '../../assets/Icon/iconStore.png';

const InfoToko = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#33907C',
            height: tinggi / 10,
            flexDirection: 'row',
            paddingTop: 13,
          }}>
          <TouchableOpacity>
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Image source={kembali} style={{height: 25, width: 25}} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              left: lebar / 3.2,
            }}>
            My Store
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: '#F6F9FF',
              height: lebar / 1.7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={iconStore}
              style={{height: tinggi / 6, width: lebar / 2.4}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                width: lebar / 1.3,
                textAlign: 'center',
                marginTop: 25,
              }}>
              Informasi ini digunakan untuk membangun toko kamu
            </Text>
          </View>
          <ScrollView style={{paddingHorizontal: 20}}>
            <Text style={styles.teks}>Nama Toko</Text>
            <Text style={styles.teks2}>Toko Khas Ku</Text>
            <Text style={styles.teks}>Website Toko</Text>
            <Text style={styles.teks2}>www.tokokhas.com</Text>
            <Text style={styles.teks}>Deskripsi Toko</Text>
            <Text style={styles.teks2}>
              Sebuah toko yang bergerak di makanan yang enak sekali seperti
              terbang ke langit yang ke tujuh uhh mantapp
            </Text>
            <Text style={styles.teks}>Tipe Toko</Text>
            <Text style={styles.teks2}>Kelontong</Text>
            <Text style={styles.teks}>Alamat</Text>
            <Text style={styles.teks2}>Jl. Merdeka No.34</Text>
            <Text style={styles.teks}>Kota</Text>
            <Text style={styles.teks2}>Kota Bandung</Text>
            <Text style={styles.teks}>Negara</Text>
            <Text style={styles.teks2}> Indonesia</Text>
            <Text style={styles.teks}>Kode Pos</Text>
            <Text style={styles.teks2}>112233</Text>
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: tinggi / 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <ButtonGreen judul="Edit" p={45} l={lebar / 1.2} />
          <View
            style={{
              height: 3,
              width: 200,
              backgroundColor: '#E5E5E5',
              borderRadius: 50,
              marginTop: 10,
            }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InfoToko;

const styles = StyleSheet.create({
  teks: {
    color: '#999',
    marginTop: 20,
  },
  teks2: {
    color: 'black',
    marginTop: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingBottom: 5,
  },
});
