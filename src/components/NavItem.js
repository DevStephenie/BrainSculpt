import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const NavItem = ({ label, icon, isActive, onPress }) => {
  const iconColor = isActive ? '#698AFF' : '#dddddd';

  return (
    <TouchableOpacity onPress={onPress}  className='flex justify-center items-center transition duration-200'>
      <FontAwesomeIcon icon={icon} color={iconColor} size={24} />
      <Text className={`text-md font-body text-center ${ isActive ? 'text-blue font-semibold' : 'text-[#999] font-normal' }`}>{label}</Text>
    </TouchableOpacity>
  );
};


export default NavItem;
