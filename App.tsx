import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Game from './components/Game';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    alignItems: 'center',
    justifyContent: 'center'
  },
});
