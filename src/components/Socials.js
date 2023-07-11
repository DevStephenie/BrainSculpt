import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const Socials = () => {
  return (
    <View className="flex items-center justify-between opacity-50">
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity className="mx-3">
          <Entypo name="pinterest" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="mx-3">
          <FontAwesome5 name="facebook-f" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="mx-3">
          <Entypo name="instagram-with-circle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="mx-3">
          <FontAwesome5 name="tiktok" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text className="text-xs text-center text-opacity-50 my-1">
        Find Us On Other Platforms
      </Text>
    </View>
  );
};

export default Socials;
