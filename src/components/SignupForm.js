import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../reducers/authSlice';
import { BtnFull, EmailField, PasswordField } from '../components';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Call the signup action with email and password
    dispatch(signup({ email, password }));
  };

  return (
      <View className='relative flex flex-col w-full justify-center items-center my-5 '>
        <EmailField value={email} onChange={text => setEmail(text)} />
        <PasswordField value={password} onChange={text => setPassword(text)} />
        <BtnFull
          title={'Sign up'}
          onPress={handleSignup}
          btnStyling={'mt-7'}
        />
    </View>
  );
};

export default SignupForm;
