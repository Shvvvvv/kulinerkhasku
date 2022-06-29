import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import cilok from '../../assets/image/cilok.jpg';
import CardProduct from '../../components/card-product';
import {TouchableOpacity} from 'react-native-gesture-handler';
import kembali from '../../assets/Icon/Back.png';

const ListProductByToko = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.mainContainer}>
        <ImageBackground source={cilok} style={styles.imageCover}>
          <TouchableOpacity style={styles.buttonKembali}>
            <View>
              <Image source={kembali} style={{height: 30, width: 30}} />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.containerLokasi}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#33907C',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <View style={styles.containerAlamat}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                Cek Lokasi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#33907C',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', marginBottom: 5}}>Alamat: </Text>
          <Text style={{color: 'white'}}>
            Jl. Dakota No.111 Kel.Sukaraja Kec. Cicendo Kota Bandung
          </Text>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.containerProduk}>
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={cilok} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListProductByToko;

const styles = StyleSheet.create({
  mainContainer: {height: '20%', width: '100%'},
  imageCover: {flex: 1, paddingVertical: 35, paddingHorizontal: 15},
  buttonKembali: {
    backgroundColor: '#FFFFFF70',
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLokasi: {
    height: '10%',
    backgroundColor: '#33907C',
    flexDirection: 'row',
  },
  containerAlamat: {
    borderWidth: 1,
    height: 40,
    width: 150,
    alignSelf: 'center',
    borderRadius: 50,
    borderColor: 'white',
    justifyContent: 'center',
  },
  containerProduk: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
