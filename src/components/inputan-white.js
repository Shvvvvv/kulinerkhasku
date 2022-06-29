import React from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputanWhite = ({
  error,
  pass,
  clr,
  wid,
  mrginBot,
  plcholder,
  onBlur,
  ...rest
}) => {
  return (
    <View
      style={{justifyContent: 'center', padding: 0, marginBottom: mrginBot}}>
      <TextInput
        onBlur={onBlur}
        secureTextEntry={pass}
        style={[styles(error).inputEmail, {color: clr, width: wid}]}
        placeholder={plcholder}
        placeholderTextColor={clr}
        {...rest}
      />
      {error ? (
        <Text style={{color: 'red', fontSize: 16, marginLeft: 15}}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export default InputanWhite;

const styles = error =>
  StyleSheet.create({
    inputEmail: {
      borderColor: error ? 'red' : '#33907C',
      borderWidth: 1,
      borderRadius: 100,
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      paddingLeft: 20,
    },
  });
