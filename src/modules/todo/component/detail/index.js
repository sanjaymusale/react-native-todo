import React, { useState } from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, Text, CheckBox, Alert } from 'react-native';
import Button from './../../../../components/button'

const style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  description: {
    marginBottom: 10
  },
  checkbox: {
    marginLeft: -5,
    flexDirection: 'row'
  },
  shadowThick: {
    elevation: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    zIndex: 1,
  },
})

const TodoDetails = (props) => {
  const todoData = props.navigation.getParam('todo');

  const deleteTodo = (todo) => {
    props.dispatch({ type: 'REMOVE_TODO', id: todo.id })
    Alert.alert('Deleted Succesfully', `${todo.title} was deleted.`,
      [{ text: 'OK', onPress: () => props.navigation.goBack() }],
      { cancelable: false }
    )
  }

  const updateTodo = (todo) => {
    props.dispatch({ type: 'UPDATE_TODO', payload: { isCompleted: true }, id: todo.id })
    Alert.alert('Marked as Completed', `${todo.title} is completed.`,
      [{ text: 'OK', onPress: () => props.navigation.goBack() }],
      { cancelable: false }
    )
  }

  return (
    <View style={[style.container, style.shadowThick]}>
      <Text style={style.description}>{todoData.title}</Text>
      <Text style={style.description}>{todoData.description}</Text>
      <View style={style.checkbox}>
        <CheckBox
          value={todoData.isCompleted}
          onValueChange={() => updateTodo(todoData)}
          disabled={todoData.isCompleted}
        />
        <Text style={{ marginTop: 5 }}>Completed</Text>
      </View>
      <Button
        title="Delete"
        onPress={() => {
          Alert.alert('Confirm', `Do you want to delete ${todoData.title} ?`, [
            { text: 'Cancel' },
            { text: 'OK', onPress: () => deleteTodo(todoData) }
          ],
            { cancelable: false },
          );
        }}
        style={{ marginTop: 10 }} />
    </View>
  )
}

TodoDetails.navigationOptions = {
  title: 'Todo Details',
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoDetails);