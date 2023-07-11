import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View className=' w-full flex flex-row justify-start items-center p-4 bg-blue'>
      <TouchableOpacity onPress={handleBackPress} className='mr-2'>
        <Text className='text-lg font-bold text-base-white'>{'<'}</Text>
      </TouchableOpacity>
      <Text className='text-lg font-bold text-base-white'>{title}</Text>
    </View>
  );
};


export default Header;
