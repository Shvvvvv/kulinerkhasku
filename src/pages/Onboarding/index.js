import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {tinggi, lebar} from '../../assets/style/Style';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = [
  {
    id: '1',
    desc: 'Cari lokasi toko disekitarmu yang menjual makanan khas? Sekarang jadi mudah !',
    image: require('../../assets/Icon/on1.png'),
  },
  {
    id: '2',
    desc: 'Berpartisipasi dalam melestarikan dan mengembangkan toko makanan khas daerah mu',
    image: require('../../assets/Icon/on2.png'),
  },
  {
    id: '3',
    desc: 'Dukung UMKM dalam mempromosikan toko makanan khas',
    image: require('../../assets/Icon/on3.png'),
  },
];

const Onboarding = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#33907C" />
        <View style={styles.kotakBawah}>
          <Text style={styles.teksDesc}>{item.desc}</Text>
        </View>
        <View style={styles.kotakContent}>
          <Image source={item.image} style={styles.image} />
        </View>
      </SafeAreaView>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.teksButton}>Next</Text>
      </View>
    );
  };

  const renderFinishButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.teksButton}>Finish</Text>
      </View>
    );
  };

  const keyExtractor = item => item.id;

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        renderDoneButton={renderFinishButton}
        onDone={() => navigation.navigate('Login')}
        activeDotStyle={{backgroundColor: '#33907C', bottom: 80}}
        dotStyle={{backgroundColor: '#77C3AF', bottom: 80}}
        data={data}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#33907C',
    position: 'relative',
  },
  kotakBawah: {
    flex: 1,
    maxHeight: tinggi / 1.7,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: 21,
    alignItems: 'center',
  },
  kotakContent: {
    width: lebar / 1.28,
    height: tinggi / 2.2,
    borderRadius: 8,
    backgroundColor: 'white',
    position: 'absolute',
    top: tinggi / 4.6,
    left: lebar / 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 32.83,
    paddingTop: 57,
  },
  image: {
    height: tinggi / 2.93,
    width: lebar / 1.29,
  },
  button: {
    height: 48,
    width: 306,
    borderRadius: 150,
    backgroundColor: '#33907C',
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
  },
  text: {
    fontSize: 18,
  },
  teksDesc: {
    fontSize: 20,
    color: '#33907C',
    textAlign: 'center',
    maxWidth: 290,
    marginBottom: 25,
    lineHeight: 25,
    marginTop: 20,
    fontFamily: 'Montserrat-Regular',
  },
  teksButton: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
  },
});
