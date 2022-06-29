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

const EditStore = () => {
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
            <View style={{paddingLeft: 10}}>
              <Image source={kembali} style={{height: 25, width: 25}} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              left: lebar / 4.3,
            }}>
            Ubah toko anda
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#F6F9FF',
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.teks}>Nama Toko</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Website Toko</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Deskripsi Toko</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Tipe Toko</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Alamat</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Kota</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Negara</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Kode Pos</Text>
          <TextInput style={styles.inputan} />
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
          <ButtonGreen judul="Simpan" p={45} l={lebar / 1.2} />
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

export default EditStore;

const styles = StyleSheet.create({
  teks: {
    color: '#999',
    marginTop: 20,
  },
  inputan: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: '#000',
    height: 35,
    // backgroundColor: 'pink',
    padding: 0,
  },
});
