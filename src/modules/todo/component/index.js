import React from 'react';
import { StyleSheet, View } from 'react-native';
import uuidv1 from 'uuid/v1';
import Form from './form';
import ListTodo from './listing';

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  line: {
    borderTopWidth: 2,
    borderTopColor: 'grey'
  }
})

class TodoCreator extends React.Component {
  static navigationOptions = {
    title: 'Todos',
  }

  state = { todos: [] }

  onAddNewTodo = todos => this.setState({ todos })

  render() {
    return (
      <View style={style.container}>
        <Form onAddNewTodo={this.onAddNewTodo} />
        <View style={style.line}></View>
        <ListTodo todos={this.state.todos} />
      </View>
    );
  }
}

export default TodoCreator;