import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * 5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 5
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
        <View style={styles.card}>
          <Text>Sanjay</Text>
        </View>
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
