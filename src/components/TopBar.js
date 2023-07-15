import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, noBack }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View className=" w-full flex flex-row justify-start items-center p-4 bg-blue">
      {!noBack && (
        <TouchableOpacity onPress={handleBackPress} className="mr-2 my-auto">
          <Ionicons name="chevron-back-outline" size={18} color="#F8FBFF" />
        </TouchableOpacity>
      )}
      <Text className="text-lg font-bold text-base-white my-auto">{title}</Text>
    </View>
  );
};

export default Header;
