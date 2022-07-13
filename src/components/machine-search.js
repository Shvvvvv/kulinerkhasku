import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import cari from '../assets/Icon/pencarian.png';
import {lebar} from '../assets/style/Style';
import {useNavigation} from '@react-navigation/native';

const Searching = props => {
  const [carii, setCari] = useState('');
  const nav = useNavigation();

  function handleClick() {
    nav.navigate('HasilPencarian', {cari: carii});
  }

  useEffect(() => {
    setCari(props.teks);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Image source={cari} style={{width: 24, height: 24, marginRight: 12}} />
      </TouchableOpacity>
      <TextInput
        placeholder="Cari Makanan"
        placeholderTextColor="#7f7f7f"
        style={styles.inputan}
        value={carii}
        onChangeText={val => {
          setCari(val);
        }}
      />
    </View>
  );
};

export default Searching;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 15,
    width: lebar / 1.1,
    alignSelf: 'center',
    height: 40,
  },
  inputan: {
    color: '#4F4F4F',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    width: lebar / 1.4,
  },
});
