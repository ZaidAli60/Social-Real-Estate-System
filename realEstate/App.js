/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View, Text} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {NativeBaseProvider} from 'native-base';
import {customTheme} from "./src/theme"

function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}

export default App;
