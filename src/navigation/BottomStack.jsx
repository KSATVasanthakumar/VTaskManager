import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { Homepage, Profilepage, Settingspage } from '../screen';
import ImageFile from '../constants/ImageFile';
import { colors } from '../styles/colors';

const Bottom = createNativeBottomTabNavigator();
console.log('image', ImageFile.next);

const BottomStack = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarLabel: '',

          tabBarActiveTintColor: colors.ACCENT,
          tabBarIcon: {
            type: 'image',
            source: ImageFile.home,
            tinted: true,
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profilepage}
        options={{
          tabBarLabel: '',
          tabBarIconStyle: {
            width: 15,
            height: 15,
          },
          tabBarActiveTintColor: colors.ACCENT,
          tabBarIcon: {
            type: 'image',
            source: ImageFile.profile,
            tinted: true,
          },
        }}
      />
      <Bottom.Screen
        name="Settings"
        component={Settingspage}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: colors.ACCENT,
          tabBarIcon: {
            type: 'image',
            source: ImageFile.setting,
            tinted: true,
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});
