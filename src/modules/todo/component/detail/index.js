import React, { useState } from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, Text, CheckBox, Alert } from 'react-native';
import Button from './../../../../components/button'

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
  }

  return (
    <View style={style.container}>
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
        style={{ marginTop: 5 }} />
    </View>
  )
}

TodoDetails.navigationOptions = {
  title: 'Todo Details',
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoDetails);