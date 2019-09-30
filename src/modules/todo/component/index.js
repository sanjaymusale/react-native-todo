import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Form from './form';
import ListTodo from './listing';

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

class TodoCreator extends React.Component {
  static navigationOptions = {
    title: 'Todos',
  }

  state = { todos: [{ title: 'sample', description: 'Sample Descripion about todo' }] }

  onAddNewTodo = (todos) => {
    this.setState({ todos })
  }

  render() {
    return (
      <View style={style.container}>
        <Form onAddNewTodo={this.onAddNewTodo} />
        <ListTodo todos={this.state.todos} />
      </View>
    );
  }
}

export default TodoCreator;