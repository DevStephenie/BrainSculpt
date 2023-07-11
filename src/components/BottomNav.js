import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NavItem from './NavItem';

const BottomNavBar = () => {
	const bottom_nav = ['Home', 'Learn', 'Balancer', 'More']

	const nav = useNavigation()
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index) => {
    setActiveTab(index);
    // nav.navigate(bottom_nav[index])
  };
   
  return (
    <View className='fixed bottom-0 bg-white shadow-lg px-12 py-4 flex flex-row justify-between items-center z-100 w-full'>
      <NavItem
        label="Home"
        icon="home"
        isActive={activeTab === 0}
        onPress={() => handleTabPress(0)}
      />
      <NavItem
        label="Learn"
        icon="fa-book-open"
        isActive={activeTab === 1}
        onPress={() => handleTabPress(1)}
      />
      <NavItem
        label="Balancers"
        icon="yin-yang"
        isActive={activeTab === 2}
        onPress={() => handleTabPress(2)}
      />
      <NavItem
        label="More"
        icon="more"
        isActive={activeTab === 3}
        onPress={() => handleTabPress(3)}
      />
    </View>
  );
};


export default BottomNavBar;
