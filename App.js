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
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {TodoItem} from "./components/todoItem";


const App: () => Node = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header style={{ flex: 1, backgroundColor: 'powderblue' }}/>
        <FlatList
            style={{ flex: 2, }}
            data={[
              {key: "Devin"},
              {key: "zwei"},
              {key: "drei"},
              {key: "vier"},
                {key: "funf"},
                {key: "sechs"},
                {key: "sieben"},
                {key: "acht"}
            ]}
            renderItem={({item}) => <TodoItem />}
        />
        <Footer />
      </View>

    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
