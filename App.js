import React from 'react';
import { createAppContainer } from 'react-navigation'
import { RootStack } from './root';

const Root = RootStack();
const AppContainer = createAppContainer(Root);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
