import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

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
        <Button
          title="Settings"
          onPress={() => {
            this.props.navigation.navigate('Setting', {
              title: 'Hi',
            })
          }}
        />
      </View>
    )
  }
}
