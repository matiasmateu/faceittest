import { registerRootComponent } from 'expo';
import React from 'react';
import ExpoApp from './App';

class App extends React.Component {
  render() {
    return <ExpoApp />;
  }
}

// @ts-ignore
registerRootComponent(App);