import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Platform } from 'react-native';

const BaseView = ({ children }) => {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

  return (
    <SafeAreaView className='flex flex-1 justify-center items-center m-0 w-full bg-base-white'>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          width: '100vw',
        }}
      >
        <View style={{ paddingTop }} className='flex relative w-full bg-base-white py-1 px-5 min-h-full'>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default BaseView;
