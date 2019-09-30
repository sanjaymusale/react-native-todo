import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  todoTitle: {
    fontSize: 16,
    padding: 10,
    marginTop: 5,
  }
})

const ListTodo = ({ todos, navigation }) => (
  <View style={style.container}>
    {todos.length > 0 && <Text style={style.title}>Todos List</Text>}
    <ScrollView>
      {todos.map((todo, index) => (
        <TouchableOpacity
          key={index}
          style={style.todoTitle}
          onPress={() => {
            navigation.navigate('TodoDetail', {
              todo,
            })
          }}
        >
          <Text>{index + 1}. {todo.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
)

export default withNavigation(ListTodo);