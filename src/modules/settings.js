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

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="press Me"
          onPress={() => {
            this.props.navigation.navigate('Home', {
              itemid: '12',
            })
          }}
        />
        <Button
          title="Change Title"
          onPress={() => {
            this.props.navigation.setParams({ title: 'Sanjay' })
          }}
        />
      </View>
    )
  }
}
