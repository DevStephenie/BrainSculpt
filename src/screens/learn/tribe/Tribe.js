import React from "react";
import { View } from "react-native";
import { BaseView, ImageTextCard, TopBar } from "../../../components";

const Tribe = ({ route }) => {
  return (
    <>
      <TopBar title="Tribe" />
      <BaseView>
        <View className="flex flex-row flex-wrap justify-start items-start w-full my-5">
          {route.params.content.map((training, index) => (
            <ImageTextCard key={index} {...training} />
          ))}
        </View>
      </BaseView>
    </>
  );
};
 
export default Tribe;
