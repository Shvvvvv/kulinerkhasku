import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import notif from '../../assets/Icon/Notification.png';
import Searching from '../../components/machine-search';
import gbr1 from '../../assets/image/cilok.jpg';
import IconNav from '../../components/icon-navbar';
import CardProduct from '../../components/card-product';
import sort from '../../assets/Icon/Sort.png';
import map from '../../assets/Icon/Maps.png';
import cate from '../../assets/Icon/Category.png';

const Produk = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.judul}>#KulinerKhasKu</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={notif} style={{width: 24, height: 24}} />
          </View>
        </View>
        <Searching />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={styles.button}>
            <Image
              source={sort}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text>Sort by</Text>
          </View>
          <View style={styles.button}>
            <Image
              source={map}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text>Lokasi</Text>
          </View>
          <View style={styles.button}>
            <Image
              source={cate}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text>Kategori</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.konten}>
        <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
          <CardProduct produkNama="Cilok" produkHarga="Rp 12.000" img={gbr1} />
        </View>
      </ScrollView>
      <View style={styles.navBottom}>
        <IconNav
          url={require('../../assets/Icon/home.png')}
          teks="Home"
          warna={'#4f4f4f'}
          linkk={() => alert('Home')}
        />
        <IconNav
          url={require('../../assets/Icon/search-active.png')}
          teks="Jelajahi"
          warna={'#33907C'}
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
          url={require('../../assets/Icon/profile.png')}
          teks="Profil"
          warna={'#4f4f4f'}
          linkk={() => alert('Profile')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Produk;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#33907C',
    width: '100%',
    height: 170,
    flexDirection: 'column',
  },
  konten: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  navBottom: {
    backgroundColor: '#eee',
    width: '100%',
    height: 55,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
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
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 29,
    paddingVertical: 20,
  },
  judul: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    height: 35,
    width: '30%',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});
