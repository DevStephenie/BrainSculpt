import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageList, Socials, BaseView } from "../components";
import { flex } from "../utils/helpers";
import {
  meditations,
  stressLevels,
  shortcuts,
  navigators,
} from "../utils/constants";

const HomeScreen = () => {
  const [activeStress, setActiveStress] = useState(0);

  return (
    <BaseView>
      <View className=" w-full my-2 pt-8">
        <Text className="mr-auto text-xl font-bold text-deep-blue max-w-5/6 mb-3">
          TODAYS MEDITAION / QUOTE OF THE DAY
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            margin: "1rem",
            width: "100vw",
            marginLeft: "6.5rem",
          }}
        >
          {meditations.map((med, index) => (
            <MeditationContainer key={index} {...med} />
          ))}
        </ScrollView>
      </View>
      <View className="w-full my-2 p-4">
        <Text className="font-semibold text-deep-blue text-lg p-2 text-opacity-75 ">
          CONTINUE
        </Text>
        <View className={`${flex} flex-row w-full h-5 mt-12 mb-2 `}>
          <Image
            source={require("../assets/meditation_dark.jpg")}
            className="relative rounded-full overflow-hidden h-20 w-20 "
            resizeMode="cover"
          />
          <View className="flex-1 ml-2 px-5 py-2 bg-white shadow-sm rounded-md">
            <View className="flex justify-start my-1">
              <Text className="text-[#999] text-xs">LESSON NAME</Text>
              <Text className="text-simple-dark font-semibold text-md">
                meditations
              </Text>
            </View>
            <View className="flex flex-row justify-start items-center my-2">
              <MaterialCommunityIcons
                name="progress-clock"
                size={24}
                color="#2A2A2A"
              />
              <Text className="text-simple-dark font-semibold text-md ml-2">
                03:20 minutes left
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex mb-2 mt-10 w-full">
        <View className='flex w-full relative mt-2 mb-4'>
          <View className='w-full bg-dark-rgba h-[0.8px] rounded-full absolute top-1/2'/>
          <Text className="font-semibold text-deep-blue text-lg py-2 bg-base-white pl-3 z-10 w-28">
            current stress
          </Text>
        </View>
        <View className="flex flex-row w-full justify-between items-center">
          {stressLevels.map((stressLevel, index) => (
            <StressLevel
              {...{ ...stressLevel, index, activeStress }}
              key={index}
              handleActiveStress={(i) => setActiveStress(i)}
            />
          ))}
        </View>
      </View>

      <View className={`flex items-start my-4 w-full'`}>
        <Text className="font-semibold text-deep-blue text-lg py-2 text-opacity-75 ">
          Shortcuts
        </Text>
        <View className="flex my-2 w-full">
          {shortcuts.map((shortcut, index) => (
            <ImageList key={index} {...shortcut} />
          ))}
        </View>
      </View>
      <View className={`${flex} my-4 w-full'`}>
        <Text className="font-semibold text-deep-blue text-lg p-2 text-opacity-75 ">
          Navigator: Where can I go for help today?{" "}
        </Text>
        <View className="flex my-4 w-full">
          {navigators.map((nav, index) => (
            <Navigator key={index} {...nav} />
          ))}
        </View>
      </View>
      <View className={`${flex} my-4 w-full'`}>
        <Socials />
      </View>
    </BaseView>
  );
};

const MeditationContainer = ({ image, page }) => {
  return (
    <ImageBackground
      className="overflow-hidden rounded-lg p-4 justify-end w-48 h-32 ml-2 first:ml-1/2 "
      resizeMode="cover"
      source={image}
    >
      <View
        className={`w-full h-2/3 bg-white-rgba opacity-40 backdrop-blur-2xl rounded-md ${flex}`}
      >
        <TouchableOpacity onPress={() => console.log(page)}>
          <Text className="text-lg text-deep-blue font-bold text-center">
            <AntDesign name="arrowright" size={24} color="#2AB1FA" />
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const Navigator = ({ title, to }) => {
  console.log(to);
  return (
    <TouchableOpacity
      className="flex justify-start items-start bg-white shadow-sm w-full p-4 my-1 rounded-md"
      onPress={() => console.log("navigations items clicked", to)}
    >
      <Text className="text-simple-dark font-bold text-md">{title}</Text>
    </TouchableOpacity>
  );
};

export const StressLevel = ({
  level,
  cta,
  icon,
  index,
  handleActiveStress,
  activeStress,
}) => {
  return (
    <TouchableOpacity
      key={index}
      className={`${flex} mx-2 rounded-md shadow-md flex-1 h-32 justify-start pt-2 ${
        activeStress === index ? "bg-white" : ""
      }`}
      onPress={() => handleActiveStress(index)}
    >
      <Text className="text-2xl mb-4">{icon}</Text>
      <Text className="text-md text-simple-dark font-semibold">{level}</Text>
      <Text className="text-md text-simple-dark font-semibold mt-2">{cta}</Text>
    </TouchableOpacity>
  );
};

export default HomeScreen;
