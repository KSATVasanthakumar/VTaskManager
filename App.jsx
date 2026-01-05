import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from './src/navigation/Routes';
import { PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
