import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputField from './../../../../components/inputFIeld';
import Button from './../../../../components/button';

const style = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%'
  },
  title: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    marginBottom: 10,
  }
})

class Form extends React.Component {
  state = {
    title: '',
    description: '',
    data: [],
  }

  setData = (field, value) => {
    this.setState({ [field]: value })
  }

  onSubmit = () => {
    const { title, description } = this.state;
    if (!title || !description) {
      return
    }
    this.setState({ data: [...this.state.data, { title, description }], title: '', description: '' },
      () => { this.props.onAddNewTodo(this.state.data) }
    )
  }

  render() {
    const { title, description } = this.state;
    return (
      <View style={style.container}>
        <Text style={style.title}>Add Your Todo</Text>
        <Text style={style.subTitle} >Title</Text>
        <InputField onChange={(value) => this.setData('title', value)} value={title} />
        <Text style={style.subTitle}>Description</Text>
        <InputField onChange={(value) => this.setData('description', value)} value={description} />
        <Button title="submit" onPress={this.onSubmit} />
      </View>
    )
  }
}

export default Form;