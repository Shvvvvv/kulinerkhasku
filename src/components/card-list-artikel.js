import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import gbr1 from '../assets/image/cilok.jpg';
import {tinggi} from '../assets/style/Style';

const ArtikelList = () => {
  return (
    <View style={styles.containerArtikel}>
      <Image
        source={gbr1}
        style={{height: '100%', width: '20%', marginRight: 5}}
      />
      <View style={{flex: 1}}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{color: 'black', fontWeight: 'bold', marginBottom: 5}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{color: '#aaa', fontSize: 11}}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
      </View>
    </View>
  );
};

export default ArtikelList;

const styles = StyleSheet.create({
  containerArtikel: {
    height: tinggi / 8,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    padding: 8,
  },
});
