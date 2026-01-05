import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Loginpage, Welcomepage } from '../screen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcomepage} />
      <Stack.Screen name="Login" component={Loginpage} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
