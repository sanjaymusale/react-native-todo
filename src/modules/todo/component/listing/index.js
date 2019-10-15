import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

const style = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  textShadow: {
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

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
          <Text>{index + 1}. <Text style={todo.isCompleted && [style.completed, style.textShadow]}>{todo.title}</Text></Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
)

const mapStateToProps = ({ todos }) => ({ todos })
export default connect(mapStateToProps)(withNavigation(ListTodo));