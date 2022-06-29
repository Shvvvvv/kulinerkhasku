import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {lebar} from '../assets/style/Style';
import React from 'react';

const ButtonLBR = props => {
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

export default ButtonLBR;

const styles = StyleSheet.create({
  tex: {
    textAlign: 'center',
    color: '#33907C',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  button: {
    maxHeight: 48,
    height: 48,
    maxWidth: lebar / 1.3,
    width: lebar / 1.3,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});
