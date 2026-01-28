import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { Homepage } from '../screen';
import ImageFile from '../constants/ImageFile';
import { colors } from '../styles/colors';
import ProjectStack from '../navigation/ProjectStack';
import MoreStack from '../navigation/MoreStack';
import UserStack from '../navigation/UserStack';

const Bottom = createNativeBottomTabNavigator();

const BottomStack = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colors.ACCENT,
          tabBarIcon: {
            type: 'image',
            source: ImageFile.home,
            tinted: true,
          },
        }}
      />

      <Bottom.Screen
        name="Project"
        component={ProjectStack}
        options={{
          tabBarLabel: 'Project',
          tabBarActiveTintColor: colors.ACCENT,
          tabBarIcon: {
            type: 'image',
            source: ImageFile.project,
            tinted: true,
          },
        }}
      />
      <Bottom.Screen
        name="Users"
        component={UserStack}
        options={{
          tabBarLabel: 'User',
          tabBarActiveTintColor: colors.ACCENT,
          tabBarIcon: {
            type: 'image',
            source: ImageFile.profile,
            tinted: true,
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={MoreStack}
        options={{
          tabBarLabel: 'More',
          tabBarIconStyle: {
            width: 5,
            height: 5,
          },
          tabBarActiveTintColor: colors.ACCENT,
          tabBarIcon: {
            type: 'image',
            source: ImageFile.more,
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
