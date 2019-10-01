import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const style = StyleSheet.create({
  customButton: {
    backgroundColor: '#841584',
    alignItems: 'center',
    padding: 12,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
  }
})
const CustomButton = ({ title, onPress, style: styles }) => (
  <TouchableHighlight
    onPress={onPress}
    style={[style.customButton, styles]}
  >
    <Text style={style.buttonText}>{title}</Text>
  </TouchableHighlight>
)

export default CustomButton;