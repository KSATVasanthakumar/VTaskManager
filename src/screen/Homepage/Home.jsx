import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../navigation/Routes';
import { colors } from '../../styles/colors';
import ImageFile from '../../constants/ImageFile';

const Home = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [username, setUserName] = useState('');
  useEffect(() => {
    const getUserToken = async () => {
      const userData1 = await AsyncStorage.getItem('tokens');
      const userData = JSON.parse(userData1); // convert to object
      setUserName(userData.refreshToken.userName);
    };
    getUserToken();
  }, []);
  const handleLogout = async () => {
    await AsyncStorage.removeItem('tokens');
    setIsAuth(false);
  };
  return (
    <WrapperContainer>
      <View style={styles.mainView}>
        <Text>Welcome! {username}</Text>
        <Pressable onPress={() => handleLogout()} style={styles.pressableBtn}>
          <Image source={ImageFile.logout} style={{ height: 40, width: 40 }} />
        </Pressable>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Pressable
          style={{
            backgroundColor: colors.ACCENT,
            height: 30,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            borderRadius: 3,
          }}
          onPress={() => console.log('pressed')}
        >
          <Text style={{ color: colors.MAINBG, fontWeight: '600' }}>
            Add New Task
          </Text>
        </Pressable>
      </View>
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  pressableBtn: {
    // backgroundColor: 'red',
    // height: 35,
  },
  btnlogoutText: {
    color: 'white',
  },
});
