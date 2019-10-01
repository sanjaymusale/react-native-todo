import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/store/creator'
import { RootStack } from './root';

const Root = RootStack();
const AppContainer = createAppContainer(Root);

class App extends React.Component {
  state = {
    isStoreCreated: false,
    store: null,
    persistor: null,
  }

  componentDidMount() {
    configureStore().then(({ store, persistor }) => this.setState({ store, persistor, isStoreCreated: true }))
  }
  render() {
    const { isStoreCreated, store, persistor } = this.state;

    if (!isStoreCreated)
      return <View><Text>loading</Text></View>

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
