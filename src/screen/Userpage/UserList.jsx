import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigation } from '@react-navigation/native';
import WrapperContainer from '../../components/WrapperContainer';
import { colors } from '../../styles/colors';
import axios from 'axios';

const UserList = () => {
  const navigation = useNavigation();
  const [userdata, setUserData] = useState([]);

  const userslist = async () => {
    const response = await axios.get(
      'https://TaskmanagerAPI.coolboiler.com/api/users?PageNumber=1&PageSize=1',
    );
    setUserData(response.data.data);
  };

  useEffect(() => {
    userslist();
  }, []);
  // const usersdata = [
  //   { id: 1, name: 'Vasanth' },
  //   { id: 2, name: 'Varsha' },
  //   { id: 3, name: 'Peter' },
  //   { id: 4, name: 'Kevin' },
  //   { id: 5, name: 'Vikram' },
  //   { id: 6, name: 'Paul' },
  //   { id: 7, name: 'Abel' },
  //   { id: 8, name: 'Abel' },
  // ];

  const handleNewUser = () => {
    navigation.navigate('CreateUser');
  };

  return (
    <WrapperContainer>
      <View style={{ alignItems: 'center' }}>
        <Pressable
          style={{
            height: 50,
            width: 200,
            backgroundColor: colors.ACCENT,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleNewUser}
        >
          <Text style={{ color: colors.TEXTPRIMARY, fontWeight: '700' }}>
            + New User
          </Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 20, // Adds space between rows
          }}
          contentContainerStyle={{
            padding: 20,
            marginTop: 20,
          }}
          data={userdata}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
                padding: 10,
                backgroundColor: colors.PRIMARY,
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
              }}
            >
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: colors.MAINBG,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                  borderRadius: 20,
                  borderColor: colors.ACCENT,
                  borderWidth: 2,
                }}
              >
                <Text style={{ fontWeight: '700' }}>
                  {item.fullName?.charAt(0)}
                </Text>
              </View>

              <Text style={{ color: colors.TEXTPRIMARY, fontWeight: '700' }}>
                {item.fullName?.toLocaleUpperCase()}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </WrapperContainer>
  );
};

export default UserList;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
