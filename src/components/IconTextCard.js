import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const IconTextCard = ({
  icon,
  title,
  to,
  content,
  containerStyle,
  textStyle,
}) => {
  const navigator = useNavigation();
  const handleNavigate = () => {
    content ? navigator.navigate(to, { content }) : navigator.navigate(to);
  };
  return (
    <View
      className={`flex justify-between items-center w-[45%] h-36 mx-2 my-2 p-4 bg-white shadow-md rounded-xl ${containerStyle}`}
    >
      <TouchableOpacity
        className="flex justify-center items-center h-full "
        onPress={handleNavigate}
      >
        <View>{icon}</View>
        <Text
          className={`text-sm font-semibold text-[#555] text-center mt-3 ${textStyle}`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IconTextCard;
