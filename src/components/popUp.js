import React, {useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Modal from 'react-native-modal';

import {tinggi} from '../assets/style/Style';

const PopUp = () => {
  let [show, setShow] = useState(true);
  return (
    <Modal
      isVisible={show}
      swipeDirection="up"
      animationIn="slideInDown"
      animationOut="slideOutUp"
      animationOutTiming={1000}
      onBackdropPress={() => setShow(false)}
      onBackButtonPress={() => setShow(false)}
      onSwipeComplete={() => setShow(false)}
      hideModal={() => setShow(false)}
      deviceHeight={tinggi}
      // style={{backgroundColor: 'transparent'}}
      animationType="slide">
      <View
        style={{
          backgroundColor: '#b33939',
          height: 45,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            setShow(false);
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#f7f1e3',
              borderRadius: 5,
              paddingLeft: 8,
              paddingRight: 8,
              marginLeft: 15,
              marginRight: 20,
            }}>
            <Text style={{fontSize: 20, color: '#f7f1e3'}}>X</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={{color: '#f7f1e3'}}>Hello Putri</Text>
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({});
