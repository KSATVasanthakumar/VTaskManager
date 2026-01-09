import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
const Routes = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('tokens');
      console.log(token);
      setIsAuth(!!token);
    };

    checkAuth();
  }, []);

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
