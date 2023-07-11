import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { login } from '../reducers/authSlice';
import { BtnFull, EmailField, PasswordField } from '.';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();      

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login({ email, password }));
    error ? console.log(error) : navigation.navigate('Home')
  };
 
  return (
    <View className='relative flex flex-col w-full justify-center items-center my-5 '>
      <EmailField value={email} onChange={text => setEmail(text)} />
      <PasswordField value={password} onChange={text => setPassword(text)} />
      <BtnFull
        title={'Log in'}
        onPress={handleLogin}
        btnStyling={'mt-7'}
      />
    </View>
  );
};

export default LoginForm;