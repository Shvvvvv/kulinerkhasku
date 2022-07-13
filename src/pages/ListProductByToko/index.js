import React from 'react';

import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from 'react-native-ratings';

import FontAwe5 from 'react-native-vector-icons/Ionicons';

// import {} from 'react-native-gesture-handler';
import kembali from '../../assets/Icon/Back.png';
import cilok from '../../assets/image/cilok.jpg';
import ButtonGreen from '../../components/button-green';
import CardProduct from '../../components/card-product';

const ListProductByToko = () => {
  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <ScrollView>
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
            <Text style={{fontSize: 16, color: 'white'}}>
              Jumlah Pengunjung
            </Text>
            <Text style={{fontSize: 16, color: 'gold'}}>450</Text>
          </View>
        </View>
        <ScrollView style={{height: 450}} nestedScrollEnabled>
          <View style={styles.containerProduk}>
            <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" />
            <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" />
            <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" />
            <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" />
            <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" />
            <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" />
            <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" />
          </View>
        </ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: 'white',
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
            <Rating
              imageSize={20}
              showRating={false}
              onFinishRating={ratingCompleted}
            />
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: '#33907C',
                width: '90%',
                height: 100,
                borderRadius: 20,
                textAlignVertical: 'top',
                color: '#33907C',
                padding: 15,
                marginTop: 10,
              }}
              multiline
              placeholder="Tulis penilaianmu disini..."
              placeholderTextColor={'#33907C'}
            />
            <ButtonGreen
              l={150}
              p={30}
              judul="Berikan Komentar"
              marginTop={10}
            />
          </View>
        </View>
        <ScrollView></ScrollView>
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
