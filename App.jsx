import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/navigation/Routes';
import { PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
