import React, {useEffect} from 'react';
import {View, StyleSheet, Image, StatusBar, SafeAreaView} from 'react-native';
import logo from '../../assets/logo/logo.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //Harusnya Login
      navigation.replace('ListProduct');
    }, 5000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View>
        <Image source={logo} style={{width: 110, height: 105}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33907C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
