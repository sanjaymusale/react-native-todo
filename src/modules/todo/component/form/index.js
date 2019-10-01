import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import uuidv1 from 'uuid/v1';
import InputField from './../../../../components/inputFIeld';
import Button from './../../../../components/button';
import { connect } from 'react-redux';

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
  }

  setData = (field, value) => {
    this.setState({ [field]: value })
  }

  onSubmit = () => {
    const { title, description } = this.state;
    if (!title || !description) {
      return
    }
    const data = { id: uuidv1(), title, description, isCompleted: false }
    this.props.dispatch({ type: 'ADD_TODO', payload: data });
    this.setState({ title: '', description: '' })
  }

  render() {
    const { title, description } = this.state;
    return (
      <View style={style.container}>
        <Text style={style.title}>Add Your Todo</Text>
        <Text style={style.subTitle} >Title</Text>
        <InputField onChange={(value) => this.setData('title', value)} value={title} />
        <Text style={style.subTitle}>Description</Text>
        <InputField onChange={(value) => this.setData('description', value)} value={description} multiline={true}
          numberOfLines={10}
          style={{ height: 100, textAlignVertical: 'top', }} />
        <Button title="Submit" onPress={this.onSubmit} />
      </View>
    )
  }
}

export default connect()(Form);