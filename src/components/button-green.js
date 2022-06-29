import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {lebar, tinggi} from '../assets/style/Style';

const ButtonGreen = ({link, p, l, judul, submitting, ...rest}) => {
  const bgColor = submitting ? 'gray' : '#33907C';
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={submitting ? null : link} {...rest}>
        <View
          style={[
            styles.button,
            {height: p, width: l, backgroundColor: bgColor},
          ]}>
          <Text style={styles.tex}>{judul}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ButtonGreen;

const styles = StyleSheet.create({
  tex: {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#33907C',
  },
});
