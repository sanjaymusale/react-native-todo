import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const style = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  }
})

const InputField = ({
  placeholder, onChange, value, style: styles, ...rest,
}) => (
    <TextInput
      style={[style.textInput, styles]}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      {...rest}
    />
  );


export default InputField;