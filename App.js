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
    SafeAreaView, StyleSheet, View,

} from 'react-native';
import TodoScreen from "./components/TodoScreen";





const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
        <TodoScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});



export default App;
