import React, { useState } from 'react'
import { StyleSheet, View, Text, CheckBox } from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 15,
  },
  description: {
    marginBottom: 10
  },
  checkbox: {
    flexDirection: 'row'
  }
})
const TodoDetails = (props) => {
  const [checked, setChecked] = useState(false);
  const todoData = props.navigation.getParam('todo');
  return (
    <View style={style.container}>
      <Text style={style.description}>{todoData.title}</Text>
      <Text style={style.description}>{todoData.description}</Text>
      <View style={style.checkbox}>
        <CheckBox
          value={checked}
          onValueChange={() => setChecked(!checked)}
        />
        <Text onPress={() => setChecked(!checked)} style={{ marginTop: 5 }}> this is checkbox</Text>
      </View>
    </View>
  )
}

TodoDetails.navigationOptions = {
  title: 'Todo Details',
}

export default TodoDetails;