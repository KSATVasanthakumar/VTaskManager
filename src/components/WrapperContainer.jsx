import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../styles/colors';

const WrapperContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.MAINBG,
  },
});
