import React from 'react';
import { Pressable, Text } from 'react-native';

const BtnFull = ({ title, onPress, btnStyling, textStyling }) => {
  return (
    <Pressable
      className={`flex justify-center items-center p-4 text-center w-full bg-blue rounded-2xl ${btnStyling}`}
      onPress={onPress}
    >
      <Text 
        className={`text-md font-bold text-white ${textStyling}`}
        >{title}</Text>
    </Pressable>
  );
};

export default BtnFull;