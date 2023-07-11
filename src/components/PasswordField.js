import { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const PasswordField = ({ value, onChange, placeholder }) => {
  const handleTextChange = (text) => {
    onChange(text);
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return ( 
    <View className='flex flex-row justify-between items-center relative shadow-lg bg-white p-4 rounded-2xl my-2 mx-auto w-full focus-within:border-2 focus-within:border-blue '>
      <TextInput
        className='bg-white text-blue placeholder:text-opacity-80 placeholder:text-blue focus:border-0'
        value={value}
        onChangeText={handleTextChange}
        secureTextEntry={!isPasswordVisible}
        placeholder={placeholder ? placeholder : 'Password'}
      />
      <TouchableOpacity className='opacity-70' onPress={togglePasswordVisibility} style={{ position: 'relative' }}>
        <Ionicons name={!isPasswordVisible ? 'eye-off' : 'eye'} size={20} color="#2AB1FA" />
      </TouchableOpacity>
    </View>
  );
};


export default PasswordField;
