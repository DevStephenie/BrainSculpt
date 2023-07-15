import React from "react";
import { View } from "react-native";
import { BaseView, IconTextCard, TopBar } from "../../../components";

const Meditations = ({ route }) => {
 console.log(route)
  return (
    <>
      <TopBar title="Meditations" />
      <BaseView>
        <View className="flex flex-row flex-wrap justify-start items-start w-full my-5">
          {route.params.content.map((training, index) => (
            <IconTextCard key={index} {...training} />
          ))}
        </View>
      </BaseView>
    </>
  );
};
 
export default Meditations;
