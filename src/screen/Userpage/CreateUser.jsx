import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../styles/colors';
import AnimatedToast from '../../components/AnimatedToast';

const CreateUser = () => {
  const [formdata, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: '',
    customError: '',
  });

  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };
  const validationForm = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = formdata.email.trim();
    const password = formdata.password.trim();
    const confirmpassword = formdata.confirmpassword.trim();
    console.log(confirmpassword);
    let error = '';
    if (!formdata.fullname.trim() || formdata.fullname.length < 3) {
      setFormData(prev => ({
        ...prev,
        customError: 'Fullname is not valid',
      }));
      showToast();
      return false;
    }
    if (!email || email.length < 10 || !regex.test(email)) {
      setFormData(prev => ({
        ...prev,
        customError: 'Email is not valid',
      }));
      showToast();
      return false;
    }
    if (!formdata.password.trim() || formdata.password < 5) {
      setFormData(prev => ({
        ...prev,
        customError: 'Password is not valid',
      }));
      showToast();
      return false;
    }

    if (!confirmpassword) {
      error = 'Confirm Password is required';
    } else if (confirmpassword.length < 5) {
      error = 'Confirm Password must be at least 5 characters';
    } else if (password !== confirmpassword) {
      error = 'Passwords do not match';
    }

    if (error) {
      setFormData(prev => ({
        ...prev,
        customError: error,
      }));
      showToast();
      return false;
    }

    if (!formdata.role.trim() || formdata.role < 5) {
      setFormData(prev => ({
        ...prev,
        customError: 'Role is not valid',
      }));
      showToast();
      return false;
    }
  };

  const handleCreateUser = () => {
    console.log('handleuser', formdata);
    if (!validationForm()) return;
  };
  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };
  return (
    <View>
      {/* {formdata.customError && (
        <Text style={{ color: colors.ERROR, fontSize: 10 }}>
          {formdata.customError}
        </Text>
      )} */}
      {visible && (
        <AnimatedToast
          type={'info'}
          message={formdata.customError}
          visible={visible}
        />
      )}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <TextInput
          autoFocus={true}
          placeholder="FullName"
          style={styles.txtInput}
          maxLength={45}
          value={formdata.fullname}
          onChangeText={text => handleChange('fullname', text)}
        />

        <TextInput
          placeholder="Email"
          style={styles.txtInput}
          maxLength={85}
          value={formdata.email}
          onChangeText={text => handleChange('email', text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.txtInput}
          maxLength={15}
          value={setFormData.password}
          onChangeText={text => handleChange('password', text)}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.txtInput}
          maxLength={15}
          value={setFormData.confirmpassword}
          onChangeText={text => handleChange('confirmpassword', text)}
        />
        <TextInput
          placeholder="Role"
          style={styles.txtInput}
          maxLength={20}
          value={setFormData.role}
          onChangeText={text => handleChange('role', text)}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Pressable style={styles.button} onPress={() => handleCreateUser()}>
          <Text
            style={{
              color: colors.MAINBG,
              fontSize: 16,
              fontWeight: '500',
            }}
          >
            Create User
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateUser;

const styles = StyleSheet.create({
  txtInput: {
    width: 300,
    borderWidth: 0.2,
    borderBlockColor: colors.PRIMARY,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: colors.ACCENT,
    marginTop: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
