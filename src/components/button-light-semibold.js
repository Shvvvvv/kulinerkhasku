import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {tinggi, lebar} from '../assets/style/Style';
import React from 'react';

const ButtonLSSM = props => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={props.link}>
        <View style={[styles.button, {marginTop: props.mrgTop}]}>
          <Text style={styles.tex}>{props.teks}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ButtonLSSM;

const styles = StyleSheet.create({
  tex: {
    textAlign: 'center',
    color: '#33907C',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  button: {
    maxHeight: tinggi / 6,
    height: tinggi / 17,
    maxWidth: lebar / 1.2,
    width: lebar / 1.5,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});
