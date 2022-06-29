import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const IconNav = props => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={props.url} style={{height: 25, width: 25}} />
      <Text style={{color: props.warna, textAlign: 'center'}}>
        {props.teks} 
      </Text>
    </View>
  );
};

export default IconNav;

const styles = StyleSheet.create({});
