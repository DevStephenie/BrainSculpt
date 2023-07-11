import React from 'react';
import { View, Text, Image } from 'react-native';
import { BaseView, BtnFull, SignupForm, TextLink } from '../../components';

const SignupScreen = () => {
  return (
    <BaseView>
      <View className='flex flex-col justify-between items-center mt-2  mb-5 w-full h-full pb-10'>
        <View className='flex justify-center items-center w-full'>
          <Image
          style={{ width: '80%', height: 80 }}
          source={require('../../assets/logo.png')}
          resizeMode={'contain'}
          />  
        </View>

        <SignupForm />

        <View className='flex flex-col justify-between items-center w-full my-1'>
          <View className='flex justify-center items-center bg-[#dddddd] w-full h-[1px] rounded-full'>
            <Text className='flex justify-center items-center w-10 h-5 rounded-full bg-base-white text-center text-md text-blue'>Or</Text>
          </View>
        </View>

        <View className='flex justify-center items-center w-full'>
          <BtnFull
            title={'Signup with Facebook'}
            onPress={() => console.log("handleFacebookSignup")}
            btnStyling={'my-2'}
          />
          <BtnFull
            title={'Signup with Apple'}
            onPress={() => console.log("handleAppleSignup")}
          />
        </View>

        <TextLink 
          title={"Have an account? Log in"}
          onPress={() => navigation.navigate("Login")}
          btnStyling={'my-3'}
        />

      </View>
    </BaseView>
)};

export default SignupScreen;
