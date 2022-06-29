import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import {lebar} from '../assets/style/Style';

const Inputan = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder={props.plchlder}
        placeholderTextColor="white"
        style={styles.input}
      />
    </SafeAreaView>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    height: 48,
    maxHeight: 48,
    width: lebar / 1.3,
    paddingLeft: 18,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginBottom: 16,
  },
});
