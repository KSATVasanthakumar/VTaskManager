import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';

const Morepage = () => {
  return (
    <WrapperContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable>
          <Text>Profile</Text>
        </Pressable>
        <Pressable>
          <Text>Settings</Text>
        </Pressable>
        <Pressable>
          <Text>Logout</Text>
        </Pressable>
      </View>
    </WrapperContainer>
  );
};

export default Morepage;

const styles = StyleSheet.create({});
