import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CardProduct = props => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableHighlight
          onPress={() => {
            nav.navigate('DetailProduk', {idProduct: props.idP});
          }}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{uri: props.img}}
              resizeMode="cover"
              style={{flex: 1}}
              imageStyle={styles.image}
            />
          </View>
        </TouchableHighlight>
        <View style={styles.produkContainer}>
          <View>
            <Text style={{color: '#4A4A4A'}}>{props.produkNama}</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: '#33907C'}}>{props.produkHarga}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 180,
    backgroundColor: 'white',
    padding: 10,
  },
  card: {
    height: 180,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  imageContainer: {
    height: 127,
  },
  image: {borderTopRightRadius: 10, borderTopLeftRadius: 10},
  produkContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
});
