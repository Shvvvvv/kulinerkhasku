import React from 'react';

import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import FontAwe5 from 'react-native-vector-icons/Ionicons';

// import {} from 'react-native-gesture-handler';
import kembali from '../../assets/Icon/Back.png';
import cilok from '../../assets/image/cilok.jpg';
import CardProduct from '../../components/card-product';

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
      <View
        style={{
          height: 65,
          flexDirection: 'row',
          padding: 8,
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#33907C',
            width: '40%',
          }}>
          <Text style={{fontSize: 16, color: 'white'}}>Rating Toko</Text>
          <Text style={{fontSize: 16, color: 'gold'}}>4.8</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#33907C',
            width: '40%',
          }}>
          <Text style={{fontSize: 16, color: 'white'}}>Jumlah Pengunjung</Text>
          <Text style={{fontSize: 16, color: 'gold'}}>450</Text>
        </View>
      </View>
      <View
        style={{
          height: 70,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <Text style={{color: 'black', marginBottom: 5}}>
            Berikan penilaianmu setelah mengunjungi toko
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '50%',
            }}>
            <FontAwe5 name="star" color="gold" size={18} />
            <FontAwe5 name="star" color="gold" size={18} />
            <FontAwe5 name="star" color="gold" size={18} />
            <FontAwe5 name="star-outline" color="gold" size={18} />
            <FontAwe5 name="star-outline" color="gold" size={18} />
          </View>
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
    paddingHorizontal: 2,
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
