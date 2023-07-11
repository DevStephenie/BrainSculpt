import React from 'react';
import { Pressable, Text } from 'react-native';

const TextLink = ({ title, onPress, btnStyling, textStyling }) => {
  return (
    <Pressable
        className={`flex justify-center items-center text-center w-full rounded-2xl ${btnStyling}`}
        onPress={onPress}
    >
        <Text 
        className={`text-md text-blue underline ${textStyling}`}
        >{title}</Text>
    </Pressable>
  );
};

export default TextLink;