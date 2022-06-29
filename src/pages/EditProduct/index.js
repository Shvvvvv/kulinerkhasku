import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {tinggi, lebar} from '../../assets/style/Style';
import kembali from '../../assets/Icon/Back.png';
import ButtonGreen from '../../components/button-green';
import close from '../../assets/Icon/Close.png';
import cilok from '../../assets/image/cilok.jpg';

const EditProduct = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#33907C',
            height: tinggi / 13,
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
              left: lebar / 3.8,
            }}>
            Edit Product
          </Text>
        </View>
        <View
          style={{
            height: tinggi / 4,
            backgroundColor: '#F6F9FF',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '75%',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: 105,
                  width: 140,
                  borderWidth: 2,
                  borderStyle: 'dashed',
                  borderColor: '#4F4F4F',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={close}
                  style={{
                    transform: [{rotate: '45deg'}],
                    alignSelf: 'center',
                    marginBottom: 5,
                    height: 21,
                    width: 21,
                  }}
                />
                <Text style={{color: '#4F4F4F', fontWeight: 'bold'}}>
                  Add photos
                </Text>
                <Text style={{fontSize: 12, color: '#CCC'}}>
                  1600 x 1200 for hi res
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{height: 105, width: 140}}>
              <ImageBackground
                source={cilok}
                style={{flex: 1}}
                imageStyle={{borderRadius: 10}}
              />
              <View
                style={{
                  backgroundColor: 'black',
                  width: 20,
                  height: 20,
                  position: 'absolute',
                  right: -8,
                  top: -8,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>X</Text>
              </View>
            </View>
          </View>
          <Text style={{left: 45, marginTop: 10, color: '#4f4f4f'}}>
            Max. 2 photos per product
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#F6F9FF',
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.teks}>Nama Produk</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Kategori Produk</Text>
          <TextInput style={styles.inputan} />
          <Text style={styles.teks}>Harga</Text>
          <TextInput style={[styles.inputan, {width: 80}]} />
          <Text style={styles.teks}>Deskripsi Produk</Text>
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

export default EditProduct;

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
