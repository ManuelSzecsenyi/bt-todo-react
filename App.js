/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView, StyleSheet,

} from 'react-native';
import TodoScreen from "./components/TodoScreen";





const App: () => Node = () => {
  return (
      <TodoScreen />
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});



export default App;
