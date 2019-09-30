import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
  }
})


const InputField = ({
  placeholder, onChange, value, ...rest,
}) => (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      {...rest}
    />
  );


export default InputField;