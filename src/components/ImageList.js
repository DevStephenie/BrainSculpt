// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const ImageList = ({ title, image, to }) => {
  // const nav = useNavigation()
  return (
    <TouchableOpacity 
      className="flex flex-row items-center my-2 bg-white shadow-md rounded-2xl p-2"
      // onPress={() => nav.navigate(to)}
      >
      <Image 
        source={image} 
        resizeMode='cover' 
        className='w-20 h-24 rounded-md overflow-hidden' 
      />
      <View className="flex flex-grow mx-5">
        <Text className="text-lg font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageList;
