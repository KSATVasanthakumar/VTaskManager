import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
export const AuthContext = createContext();
const Routes = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth }}>
      <NavigationContainer>
        {isAuth ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Routes;

const styles = StyleSheet.create({});
