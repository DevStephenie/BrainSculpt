import React from "react";
import { View } from "react-native";
import { BaseView, ImageTextCard, TopBar } from "../../components";
import { trainings } from "../../utils/constants";

const TrainingScreen = () => {
  return (
    <>
      <TopBar title="Learn" noBack={true}/>
      <BaseView>
        <View className="flex flex-row flex-wrap justify-start items-start w-full my-5">
          {trainings.map((training, index) => (
            <ImageTextCard key={index} {...training} />
          ))}
        </View>
      </BaseView>
    </>
  );
};

export default TrainingScreen;
