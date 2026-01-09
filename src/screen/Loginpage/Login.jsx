import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import React, { useContext } from 'react';
import { colors } from '../../styles/colors';
import WrapperContainer from '../../components/WrapperContainer';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AuthContext } from '../../navigation/Routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  // email: yup
  //   .string()
  //   .email('Enter the Valid Email')
  //   .max(45, 'Email is Too lengthy')
  //   .required('Email is required'),
  password: yup
    .string()
    .max(12, 'Password is Too lengthy')
    .required('Password is required'),
});
//https:TaskmanagerAPI.coolboiler.com/api/users/login
const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const handleLogin = async values => {
    try {
      const response = await axios.post(
        'https://TaskmanagerAPI.coolboiler.com/api/users/login',
        {
          userName: values.username, // ✅ IMPORTANT
          password: values.password,
        },
      );
      const tokenData = await AsyncStorage.setItem(
        'tokens',
        JSON.stringify(response.data.data),
      );
      if (tokenData !== null) {
        setIsAuth(true);
      }
    } catch (error) {
      console.error(
        error.response?.status,
        error.response?.data || error.message,
      );
    }
  };

  return (
    <WrapperContainer>
      <View style={styles.centerBlock}>
        <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 20 }}>
          Login
        </Text>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            handleLogin(values);
            resetForm();
          }}
        >
          {({
            values,
            setFieldValue,
            handleSubmit,
            errors,
            isValid,
            dirty,
            touched,
          }) => (
            <View style={{ width: '90%' }}>
              {/* <TextInput
                label="Email"
                mode="outlined"
                value={values.email}
                onChangeText={txt => setFieldValue('email', txt)}
              /> */}
              <TextInput
                label="Username"
                mode="outlined"
                value={values.username}
                onChangeText={txt => setFieldValue('username', txt)}
              />
              {errors.username && touched.username && (
                <Text style={{ color: 'red', marginTop: 10 }}>
                  {errors.usernamevasanth}
                </Text>
              )}
              <TextInput
                label="Password"
                mode="outlined"
                value={values.password}
                onChangeText={txt => setFieldValue('password', txt)}
                secureTextEntry
                style={{ marginTop: 12 }}
              />
              {errors.password && touched.password && (
                <Text style={{ color: 'red', marginTop: 10 }}>
                  {errors.password}
                </Text>
              )}
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Pressable
                  disabled={!isValid || !dirty}
                  style={[
                    styles.loginBtn,
                    {
                      backgroundColor:
                        !isValid || !dirty ? 'gray' : colors.PRIMARY,
                    },
                  ]}
                  onPress={handleSubmit}
                >
                  <Text
                    style={{
                      color: colors.TEXTSECONDARY,
                      fontSize: 18,
                      fontWeight: '600',
                    }}
                  >
                    Login
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </WrapperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  centerBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    width: 120,
    height: 50,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center', // center text horizontally
    justifyContent: 'center', // center text vertically
  },
});
