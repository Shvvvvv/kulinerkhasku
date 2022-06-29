import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {tinggi, lebar} from '../assets/style/Style';

const ButtonWhite = props => {
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

export default ButtonWhite;

const styles = StyleSheet.create({
  tex: {
    textAlign: 'center',
    color: '#33907C',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
