import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import IconNav from '../../components/icon-navbar';
import ButtonGreen from '../../components/button-green';
import toko from '../../assets/Icon/iconStore.png';
import ButtonWhite from '../../components/button-white';
import {lebar} from '../../assets/style/Style';
import Searching from '../../components/machine-search';
import cilok from '../../assets/image/cilok.jpg';
import edit from '../../assets/Icon/Edit.png';
import trash from '../../assets/Icon/trash.png';
import close from '../../assets/Icon/Close.png';
import {useNavigation} from '@react-navigation/native';

const MyStore = () => {
  const nav = useNavigation();
  const Card = props => {
    return (
      <View
        style={{
          width: 170,
          height: 210,
          backgroundColor: 'white',
          borderRadius: 13,
          marginBottom: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}>
        <ImageBackground
          source={cilok}
          style={{
            height: 135,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          imageStyle={{
            height: 135,
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '65%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF66',
                height: 38,
                width: 38,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={edit} style={{height: 30, width: 30}} />
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF66',
                height: 38,
                width: 38,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={trash} style={{height: 18, width: 18}} />
            </View>
          </View>
        </ImageBackground>
        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10, color: 'black'}}>Cilok</Text>
          <Text style={{color: 'black'}}>Rp 12.000,-</Text>
        </View>
      </View>
    );
  };
  const ButtonW = props => {
    return (
      <SafeAreaView>
        <TouchableOpacity>
          <View style={[styles.button, {height: props.p, width: props.l}]}>
            <Text style={styles.tex}>{props.judul}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <View
        style={{
          backgroundColor: '#33907C',
          height: '8%',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <Text style={{fontSize: 23, color: 'white'}}>My Store</Text>
      </View>
      <View
        style={{
          backgroundColor: '#E5E5E5',
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            alignItems: 'center',
          }}>
          <Image
            source={toko}
            style={{height: 65, width: 80, marginBottom: 8, marginTop: 15}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Toko Khas Ku
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 230,
              marginBottom: 23,
            }}>
            <ButtonW judul="Edit toko" l={105} p={25} />
            <ButtonGreen judul="Lihat info" l={105} p={25} />
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: '#CCC',
                height: 35,
                width: lebar,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: '#AAA'}}>
                Hapus toko
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: '#F6F9FF',
          }}>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <View style={{marginTop: 30}}>
              <Searching />
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 15,
              }}>
              Product
            </Text>
            <ScrollView style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={{
                    width: 170,
                    height: 210,
                    borderWidth: 2,
                    borderStyle: 'dashed',
                    borderColor: '#4F4F4F',
                    borderRadius: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 15,
                  }}>
                  <TouchableOpacity>
                    <Image
                      source={close}
                      style={{
                        transform: [{rotate: '45deg'}],
                        marginBottom: 10,
                        alignSelf: 'center',
                      }}
                    />
                    <Text style={{color: '#4F4F4F', fontSize: 18}}>
                      Tambah Produk
                    </Text>
                  </TouchableOpacity>
                </View>
                <Card />
                <Card />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {/* <View style={styles.navBottom}>
        <IconNav
          url={require('../../assets/Icon/home.png')}
          teks="Home"
          warna={'#4f4f4f'}
          linkk={() => {
            nav.navigate('HomeDashboard');
          }}
        />
        <IconNav
          url={require('../../assets/Icon/search.png')}
          teks="Jelajahi"
          warna={'#4f4f4f'}
          linkk={() => {
            nav.navigate('HasilPencarian');
          }}
        />
        <IconNav
          url={require('../../assets/Icon/store-active.png')}
          teks="Store"
          warna={'#33907C'}
          linkk={() => {
            nav.navigate('MyStore');
          }}
        />
        <IconNav
          url={require('../../assets/Icon/order.png')}
          teks="History"
          warna={'#4f4f4f'}
          linkk={() => {
            nav.navigate('OrderHistory');
          }}
        />
        <IconNav
          url={require('../../assets/Icon/profile.png')}
          teks="Profil"
          warna={'#4f4f4f'}
          linkk={() => {
            nav.navigate('Profile');
          }}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default MyStore;

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
  tex: {
    textAlign: 'center',
    color: '#33907C',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#33907C',
  },
});
