import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import CustomButton from '../components/button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <CustomButton
          title='Settings'
          onPress={() => {
            this.props.navigation.navigate('Setting', {
              title: 'Hi',
            })
          }}
        />
        <CustomButton
          title='Todo'
          onPress={() => {
            this.props.navigation.navigate('Todo', {
              title: 'Hi',
            })
          }}
        />
      </View>
    )
  }
}
