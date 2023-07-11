import { View, Text } from "react-native";
import React from "react";
import { ListCard, BaseView } from "../../components";
import { more } from "../../utils/constants";

const MoreEntry = () => {
  return (
    <BaseView>
      {more.map((item, index) => (
        <ListCard key={index} {...item} />
      ))}
    </BaseView>
  );
};

export default MoreEntry;
