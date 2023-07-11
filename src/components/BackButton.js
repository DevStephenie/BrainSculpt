import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleGoBack} className='flex flex-row items-center '>
      <Image
          className='my-auto'
          style={{ width: 25, height: 25 }}
          source={require('../assets/chevron-right.svg')}
          resizeMode={'contain'}
          />  
      <Text className='flex justify-center items-center text-blue font-bold text-xl ml-2'>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
